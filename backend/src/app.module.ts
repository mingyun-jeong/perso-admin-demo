import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {UserModule} from './domain/user/user.module';
import {PaymentModule} from "./domain/payment/payment.module";

import {
  userDatabaseConfig,
  authDatabaseConfig,
  paymentDatabaseConfig,
  studioDatabaseConfig,
  adminDatabaseConfig,
} from './config/data-source.config';


@Module({
  imports: [
    UserModule,
    PaymentModule,
    TypeOrmModule.forRoot(userDatabaseConfig),
    TypeOrmModule.forRoot(paymentDatabaseConfig),
    TypeOrmModule.forRoot(authDatabaseConfig),
    TypeOrmModule.forRoot(studioDatabaseConfig),
    TypeOrmModule.forRoot(adminDatabaseConfig),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
