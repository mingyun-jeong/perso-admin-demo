import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  Res,
} from '@nestjs/common';
import {PaymentFacade} from "./payment.facade";
import {SubscriberDto} from "./dto/subscriber.dto";
import {Subscriber} from "./entity/subscriber.entity";

@Controller('payment')
export class PaymentController {
  constructor(
      private paymentFacade: PaymentFacade
  ) {
  }

  @Get('/subscription')
  async subscription(@Query('userSeq') userSeq: number): Promise<SubscriberDto[]> {
    return this.paymentFacade.getUserSubscription(userSeq);
  }

}
