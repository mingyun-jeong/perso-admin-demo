import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { BaseTimeEntity } from '../../../common/entity/base-time.entity';
import { SubscriberOption } from './subscriber-option.entity';
import { Plan } from './plan.entity';
import { PlanPrice } from './plan-price.entity';
import { SubscriptionStatus } from '../data/subscription-status.enum';
import { PlanDivision } from '../data/plan-division.enum';

@Entity({
  name: 'subscriber',
  database: 'perso_payment',
})
export class Subscriber extends BaseTimeEntity {
  @PrimaryGeneratedColumn()
  seq: number;

  @Column()
  userSeq: number;

  @Column()
  planSeq: number;

  @Column()
  planPriceSeq: number;

  @Column()
  customerId: string;

  @Column()
  subscriptionId: string;

  @Column({
    type: 'enum',
    enum: SubscriptionStatus,
  })
  status: SubscriptionStatus;

  @Column({
    type: 'enum',
    enum: PlanDivision,
    name: 'division',
  })
  division: PlanDivision;

  @Column()
  isCancellationScheduled: boolean;

  @Column({ type: 'timestamp' })
  startDate: Date;

  @Column({ type: 'timestamp' })
  endDate: Date;

  @Column({ type: 'timestamp' })
  cancelDate: Date;

  @Column({ type: 'timestamp' })
  endedDate: Date;

  @OneToMany(
    () => SubscriberOption,
    subscriberOption => subscriberOption.subscriber,
    { lazy: true },
  )
  subscriberOptions: SubscriberOption[];

  @OneToOne(() => Plan, { lazy: true })
  @JoinColumn({ name: 'planSeq' })
  plan: Plan;

  @OneToOne(() => PlanPrice, { lazy: true })
  @JoinColumn({ name: 'planPriceSeq' })
  planPrice: PlanPrice;

  constructor(
    userSeq: number,
    planSeq: number,
    planPriceSeq: number,
    customerId: string,
    subscriptionId: string,
    status: SubscriptionStatus,
    division: PlanDivision,
    isCancellationScheduled: boolean,
    startDate: Date,
    endDate: Date,
    cancelDate: Date,
    endedDate: Date,
  ) {
    super();
    this.userSeq = userSeq;
    this.planSeq = planSeq;
    this.planPriceSeq = planPriceSeq;
    this.customerId = customerId;
    this.subscriptionId = subscriptionId;
    this.status = status;
    this.division = division;
    this.isCancellationScheduled = isCancellationScheduled;
    this.startDate = startDate;
    this.endDate = endDate;
    this.cancelDate = cancelDate;
    this.endedDate = endedDate;
  }

  change(planSeq: number, startDate: Date, endDate: Date) {
    this.planSeq = planSeq;
    this.startDate = startDate;
    this.endDate = endDate;
  }
}
