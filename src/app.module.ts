import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './users/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [MongooseModule.forRoot('Your-Mongodb_URL'), UserModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {} 
