import { Module } from '@nestjs/common';
import { CompaniesService } from './companies.service';
import { CompaniesController } from './companies.controller';
import { AuthService } from 'src/auth/auth.service';
import { ApiService } from 'src/api/api.service';

@Module({
  controllers: [CompaniesController],
  providers: [CompaniesService, AuthService, ApiService],
})
export class CompaniesModule {}
