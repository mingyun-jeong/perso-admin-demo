import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Subscriber } from "../entity/subscriber.entity";
import { SubscriberOption } from "../entity/subscriber-option.entity";

@Injectable()
export class SubscriberService {
  constructor(
    @InjectRepository(Subscriber)
    private subscriberRepository: Repository<Subscriber>,

    @InjectRepository(SubscriberOption)
    private subscriberOptionRepository: Repository<SubscriberOption>,
  ) {}

}
