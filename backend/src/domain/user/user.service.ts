import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(
      @InjectRepository(User)
      private usersRepository: Repository<User>,
  ) { }

  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll(): Promise<User[]>  {
    return this.usersRepository.find();
  }

  findOne(seq: bigint) {
    return `This action returns a #${seq} user`;
  }

  update(seq: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${seq} user`;
  }

  remove(seq: bigint) {
    return `This action removes a #${seq} user`;
  }
}
