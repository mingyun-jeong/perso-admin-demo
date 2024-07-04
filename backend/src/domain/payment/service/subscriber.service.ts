import {Injectable} from '@nestjs/common';
import {Subscriber} from '../entity/subscriber.entity';
import {SubscriberQueryBuilderRepository} from "../repository/subscriber-query-builder.repository";

@Injectable()
export class SubscriberService {
  constructor(
    private subscriberQueryBuilderRepository: SubscriberQueryBuilderRepository,
  ) {

  }

  findByUserSeq(userSeq: number): Promise<Subscriber[]> {
    return this.subscriberQueryBuilderRepository.findBy(userSeq)
  }

  findAll(): Promise<Subscriber[]> {
    return this.subscriberQueryBuilderRepository.find();
  }
}
