import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { BaseTimeEntity } from '../../../common/entity/base-time.entity';
import { PlanPrice } from './plan-price.entity';
import { PlanOption } from './plan-option.entity';

@Entity({
  name: 'plan',
  database: 'perso_payment',
})
export class Plan extends BaseTimeEntity {
  @PrimaryGeneratedColumn()
  seq: number;

  @Column()
  productId: string;

  @Column()
  name: string;

  @Column()
  isActive: boolean;

  @Column()
  isVisible: boolean;

  @Column()
  isDefault: boolean;

  @Column()
  isCustom: boolean;

  @Column()
  priorityTier: string;

  @OneToMany(() => PlanPrice, planPrice => planPrice.plan, { lazy: true })
  prices: PlanPrice[];

  @OneToMany(type => PlanOption, planOption => planOption.plan)
  planOptions: PlanOption[];

  constructor(
    productId: string,
    name: string,
    isActive: boolean,
    isVisible: boolean,
    isDefault: boolean,
    isCustom: boolean,
    priorityTier: string,
  ) {
    super();
    this.productId = productId;
    this.name = name;
    this.isActive = isActive;
    this.isVisible = isVisible;
    this.isDefault = isDefault;
    this.isCustom = isCustom;
    this.priorityTier = priorityTier;
  }
}
