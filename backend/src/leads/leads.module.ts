import { Module } from '@nestjs/common';
import { LeadsService } from './leads.service';
import { LeadsController } from './leads.controller';
import { AuthService } from 'src/auth/auth.service';
import { ApiService } from 'src/api/api.service';

@Module({
  controllers: [LeadsController],
  providers: [LeadsService, AuthService, ApiService],
})
export class LeadsModule {}
