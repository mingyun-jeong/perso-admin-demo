import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entity/user.entity';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { SearchRequest } from '../../../common/request/search-request';
import { UsersResponse } from '../../../common/response/users-response';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll(): Promise<User[]> {
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

  searchByKeyword(request: SearchRequest): UsersResponse[] {
    if (request.keyword == null || request.keyword.trim() === '') {
      return [];
    }

    const response: UsersResponse[] = [];
    return response;
  }
}
