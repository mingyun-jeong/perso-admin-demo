import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminController } from './admin.controller';
import { AdminService } from './service/admin.service';
import { Admin } from './entity/admin.entity';
import { AdminRoles } from './entity/admin-roles.entity';
import { Role } from './entity/role.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Admin, AdminRoles, Role])],
  controllers: [AdminController],
  providers: [AdminService],
})
export class AdminModule {}
