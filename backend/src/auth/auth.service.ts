import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';
import config from 'config';

@Injectable()
export class AuthService {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}

  async getAccessToken(): Promise<string> {
    const cachedToken: string = await this.cacheManager.get('accessToken');

    if (cachedToken) {
      return cachedToken;
    }

    try {
      const response = await fetch(config.accessTokenApiUrl, {
        method: 'GET',
        headers: {
          'X-Client-Id': config.xClientId,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      const newToken = data.access_token;

      if (!newToken) {
        throw new Error('Access token not found in response');
      }

      await this.cacheManager.set('accessToken', newToken, 3600);

      return newToken;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
