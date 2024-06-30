import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { BaseTimeEntity } from '../../../common/entity/base-time.entity';
import { Plan } from './plan.entity';
import { PlanType } from '../data/plan-type.enum';
import { PlanOptionDetail } from '../data/plan-option-detail';

@Entity({
  name: 'plan_option',
  database: 'perso_payment',
})
export class PlanOption extends BaseTimeEntity {
  @PrimaryGeneratedColumn()
  seq: number;

  @Column()
  planSeq: number;

  @Column({
    type: 'enum',
    enum: PlanType,
  })
  type: PlanType;

  @Column(type => PlanOptionDetail)
  detail: PlanOptionDetail;

  @ManyToOne(() => Plan, plan => plan.planOptions, { eager: true })
  @JoinColumn({ name: 'planSeq' })
  plan: Plan

  constructor(planSeq: number, type: PlanType, detail: PlanOptionDetail) {
    super();
    this.planSeq = planSeq;
    this.type = type;
    this.detail = detail;
  }

  static fixture() {
    return new PlanOption(null, PlanType.studio, PlanOptionDetail.fixture());
  }
}
