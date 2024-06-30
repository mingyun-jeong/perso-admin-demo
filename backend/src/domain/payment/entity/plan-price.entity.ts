import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { BaseTimeEntity } from '../../../common/entity/base-time.entity';
import { Plan } from './plan.entity';

@Entity({
  name: 'plan_price',
  database: 'perso_payment',
})
export class PlanPrice extends BaseTimeEntity {
  @PrimaryGeneratedColumn()
  seq: number;

  @Column()
  planSeq: number;

  @Column()
  priceId: string;

  @Column()
  price: string;

  @Column()
  priceUnit: string;

  @Column()
  discountRate: number;

  @Column()
  credit: number;

  @ManyToOne(() => Plan, plan => plan.prices, { lazy: true })
  @JoinColumn({ name: 'planSeq' })
  plan: Plan;
}
