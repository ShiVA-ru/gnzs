import { Module } from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { ContactsController } from './contacts.controller';
import { AuthService } from 'src/auth/auth.service';
import { ApiService } from 'src/api/api.service';

@Module({
  controllers: [ContactsController],
  providers: [ContactsService, AuthService, ApiService],
})
export class ContactsModule {}
