import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './users/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://Aj_Mah:admin123@cluster0.q7fbsn8.mongodb.net/nest-auth?retryWrites=true&w=majority'), UserModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {} 
