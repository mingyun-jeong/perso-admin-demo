import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { User } from '../entity/user.entity';

@Injectable()
export class UserQueryBuilderRepository {
  private userRepository: Repository<User>;

  constructor(private readonly dataSource: DataSource) {
    this.userRepository = this.dataSource.getRepository(User);
  }

  async search(condition: string, keyword: string): Promise<User[]> {
    const query = this.userRepository.createQueryBuilder('user');

    switch (condition) {
      case 'email':
        query.where('user.email = :keyword', { keyword: `${keyword}` });
        break;
      case 'name':
        query.where('user.name = :keyword', { keyword: `${keyword}` });
        break;
      default:
        return [];
    }

    return await query.getMany();
  }

  find() {
    return this.userRepository.find();
  }
}
