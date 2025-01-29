import { Injectable } from '@nestjs/common';
import config from 'config';
import { ApiService } from 'src/api/api.service';
import { AuthService } from 'src/auth/auth.service';

@Injectable()
export class CompaniesService {
  constructor(
    private authService: AuthService,
    private apiService: ApiService,
  ) {}
  async create() {
    const accessToken = await this.authService.getAccessToken();

    const url = config.apiUrl + 'companies';
    try {
      const response = await this.apiService.post(url, accessToken);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      return data._embedded.companies[0].id;
    } catch (error) {
      console.error('Error creating company:', error);
      throw error;
    }
  }
}
