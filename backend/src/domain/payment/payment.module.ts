import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaymentController } from './payment.controller';
import { PlanService } from './service/plan.service';
import { Plan } from './entity/plan.entity';
import { PlanOption } from './entity/plan-option.entity';
import { PlanPrice } from './entity/plan-price.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Plan, PlanOption, PlanPrice])],
  controllers: [PaymentController],
  providers: [PlanService],
})
export class PaymentModule {}
