import {Module } from '@nestjs/common';
import {TypeOrmModule } from '@nestjs/typeorm';
import {PaymentController } from './payment.controller';
import {Plan} from './entity/plan.entity';
import {PlanOption} from './entity/plan-option.entity';
import {PlanPrice} from './entity/plan-price.entity';
import {Subscriber} from "./entity/subscriber.entity";
import {SubscriberOption} from "./entity/subscriber-option.entity";
import {PaymentFacade} from "./payment.facade";
import {SubscriberService} from "./service/subscriber.service";
import {SubscriberQueryBuilderRepository} from "./repository/subscriber-query-builder.repository";

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Plan,
      PlanOption,
      PlanPrice,
      Subscriber,
      SubscriberOption
    ], 'paymentDataSource')
  ],
  controllers: [PaymentController],
  providers: [PaymentFacade, SubscriberService, SubscriberQueryBuilderRepository],
})
export class PaymentModule { }
