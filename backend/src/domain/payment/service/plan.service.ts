import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Plan } from '../entity/plan.entity';
import { PlanOption } from '../entity/plan-option.entity';
import { PlanPrice } from '../entity/plan-price.entity';

@Injectable()
export class PlanService {
  constructor(
    @InjectRepository(Plan)
    private planRepository: Repository<Plan>,

    @InjectRepository(PlanOption)
    private planOptionRepository: Repository<PlanOption>,

    @InjectRepository(PlanPrice)
    private planPriceRepository: Repository<PlanPrice>,
  ) {}

  findAll(): Promise<Plan[]> {
    return this.planRepository.find();
  }

  findOne(seq: bigint) {
    return `This action returns a #${seq} user`;
  }

  remove(seq: bigint) {
    return `This action removes a #${seq} user`;
  }
}
