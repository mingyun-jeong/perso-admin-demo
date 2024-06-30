import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { BaseTimeEntity } from '../../../common/entity/base-time.entity';

@Entity({
  name: 'user_credit_history',
  database: 'perso_payment',
})
export class UserCreditHistory extends BaseTimeEntity {
  @PrimaryGeneratedColumn()
  seq: number;

  @Column()
  creditHistorySeq: number;

  @Column()
  userCreditSeq: number;

  constructor(creditHistorySeq: number, userCreditSeq: number) {
    super();
    this.creditHistorySeq = creditHistorySeq;
    this.userCreditSeq = userCreditSeq;
  }
}
