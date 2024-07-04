import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StudioModel } from '../entity/model.entity';

@Injectable()
export class StudioService {
  constructor(
    @InjectRepository(StudioModel, 'studioDataSource')
    private studioModelRepository: Repository<StudioModel>,
  ) {}

  findAll(): Promise<StudioModel[]> {
    return this.studioModelRepository.find();
  }

  findOne(seq: bigint) {
    return `This action returns a #${seq} user`;
  }

  remove(seq: bigint) {
    return `This action removes a #${seq} user`;
  }
}
