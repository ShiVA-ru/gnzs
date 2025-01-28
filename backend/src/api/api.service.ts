import { Injectable } from '@nestjs/common';

@Injectable()
export class ApiService {
  async post(url: string, accessToken: string) {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + accessToken,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify([
        {
          name: 'test',
        },
      ]),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response;
  }
}
