import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from './auth.controller';
import { AuthService } from './service/auth.service';
import { RefreshToken } from './entity/refresh-token.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
       RefreshToken
    ], 'authDataSource')
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
