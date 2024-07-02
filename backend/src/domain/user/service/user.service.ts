import { Injectable } from '@nestjs/common';
import { User } from '../entity/user.entity';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { SearchType } from '../../../common/data/search-type.enum';
import { UserQueryBuilderRepository } from '../repository/user-query-builder.repository';

@Injectable()
export class UserService {
  constructor(private userQueryBuilderRepository: UserQueryBuilderRepository) {}

  async searchByKeyword(
    condition: SearchType,
    keyword: string,
  ): Promise<User[]> {
    if (keyword == null || keyword.trim() === '') {
      return null;
    }
    return await this.userQueryBuilderRepository.search(condition, keyword);
  }

  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll(): Promise<User[]> {
    return this.userQueryBuilderRepository.find();
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
