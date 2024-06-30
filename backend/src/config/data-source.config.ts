import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { join } from 'path';

export const adminDatabaseConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'eoqkr1!',
  database: 'perso_admin',
  entities: [join(__dirname, '../domain/admin/entity/*.entity.*')],
  synchronize: false,
};

export const userDatabaseConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'eoqkr1!',
  database: 'perso_user',
  entities: [join(__dirname, '../domain/user/entity/*.entity.*')],
  synchronize: false,
};

export const authDatabaseConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'eoqkr1!',
  database: 'perso_auth',
  entities: [join(__dirname, '../domain/auth/entity/*.entity.*')],
  synchronize: false,
};

export const paymentDatabaseConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'eoqkr1!',
  database: 'perso_payment',
  entities: [join(__dirname, '../domain/payment/entity/*.entity.*')],
  synchronize: false,
};

export const studioDatabaseConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'eoqkr1!',
  database: 'perso_studio',
  entities: [join(__dirname, '../domain/studio/entity/*.entity.*')],
  synchronize: false,
};
