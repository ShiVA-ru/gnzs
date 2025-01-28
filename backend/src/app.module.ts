import { Module } from '@nestjs/common';
import { CompaniesModule } from './companies/companies.module';
import { ContactsModule } from './contacts/contacts.module';
import { LeadsModule } from './leads/leads.module';
import { AuthModule } from './auth/auth.module';
import { CacheModule } from '@nestjs/cache-manager';
import { ApiModule } from './api/api.module';

@Module({
  imports: [
    CompaniesModule,
    ContactsModule,
    LeadsModule,
    AuthModule,
    CacheModule.register({ isGlobal: true }),
    ApiModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
