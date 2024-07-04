import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Admin } from '../entity/admin.entity';
import { AdminRoles } from '../entity/admin-roles.entity';
import { Role } from '../entity/role.entity';

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(Admin, 'adminDataSource')
    private adminRepository: Repository<Admin>,

    @InjectRepository(AdminRoles, 'adminDataSource')
    private adminRolesRepository: Repository<AdminRoles>,

    @InjectRepository(Role, 'adminDataSource')
    private roleRepository: Repository<Role>,
  ) {}

  findAll(): Promise<Admin[]> {
    return this.adminRepository.find();
  }

  findOne(seq: bigint) {
    return `This action returns a #${seq} user`;
  }

  remove(seq: bigint) {
    return `This action removes a #${seq} user`;
  }
}
