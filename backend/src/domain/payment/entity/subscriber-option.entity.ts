import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { BaseTimeEntity } from '../../../common/entity/base-time.entity';
import { Subscriber } from './subscriber.entity';
import { PlanType } from '../data/plan-type.enum';
import { PlanOptionDetail } from '../data/plan-option-detail';

@Entity({
  name: 'subscriber_option',
  database: 'perso_payment',
})
export class SubscriberOption extends BaseTimeEntity {
  @PrimaryGeneratedColumn()
  seq: number;

  @Column()
  userSeq: number;

  @Column()
  subscriberSeq: number;

  @Column({
    type: 'enum',
    enum: PlanType,
  })
  type: PlanType;

  @Column(type => PlanOptionDetail)
  detail: PlanOptionDetail;

  @ManyToOne(() => Subscriber, subscriber => subscriber.subscriberOptions, {
    lazy: true,
  })
  @JoinColumn({ name: 'subscriberSeq' })
  subscriber: Subscriber;

  constructor(subscriberSeq: number, type: PlanType, detail: PlanOptionDetail) {
    super();
    this.subscriberSeq = subscriberSeq;
    this.type = type;
    this.detail = detail;
  }

  static fixture() {
    return new SubscriberOption(1, PlanType.studio, PlanOptionDetail.fixture());
  }
}
