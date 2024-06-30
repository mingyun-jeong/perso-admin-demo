import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';
import { BaseTimeEntity } from '../../../common/entity/base-time.entity';
import { CreditStatus } from '../data/credit-status.enum';

@Entity({
  name: 'user_credit',
  database: 'perso_payment',
})
export class UserCredit extends BaseTimeEntity {
  @PrimaryGeneratedColumn()
  seq: number;

  @Column()
  userSeq: number;

  @Column('decimal')
  initialCredit: number;

  @Column('decimal')
  currentCredit: number;

  @Column({
    type: 'enum',
    enum: CreditStatus,
  })
  status: CreditStatus;

  @Column({ type: 'timestamp' })
  expireDate: Date;

  constructor(
    userSeq: number,
    initialCredit: number,
    currentCredit: number,
    status: CreditStatus,
    expireDate: Date,
  ) {
    super();
    this.userSeq = userSeq;
    this.initialCredit = initialCredit;
    this.currentCredit = currentCredit;
    this.status = status;
    this.expireDate = expireDate;
  }

  static readonly ZERO = 0;

  redeemCurrentCredit(useCredit: number): number {
    if (useCredit === UserCredit.ZERO) {
      return UserCredit.ZERO;
    }

    if (this.currentCredit > useCredit) {
      this.status = CreditStatus.partial_used;
      this.currentCredit -= useCredit;
      return 0;
    }

    const remainCredit = useCredit - this.currentCredit;
    this.status = CreditStatus.used;
    this.currentCredit = 0;
    return remainCredit;
  }

  restoreCurrentCredit(
    remainCredit: number,
    usedDateTime: Date,
    currentDateTime: Date,
  ): number {
    if (remainCredit === UserCredit.ZERO) {
      return UserCredit.ZERO;
    }

    const restoredCredit = this.initialCredit - this.currentCredit;
    if (this.expireDate < currentDateTime) {
      this.expireDate = new Date(
        this.expireDate.getTime() +
          (currentDateTime.getTime() - usedDateTime.getTime()),
      );
    }

    if (restoredCredit <= remainCredit) {
      this.currentCredit += restoredCredit;
      this.status = CreditStatus.un_used;
      return remainCredit - restoredCredit;
    }

    this.currentCredit += remainCredit;
    this.status = CreditStatus.partial_used;
    return 0;
  }

  expireCredit(): void {
    this.status = CreditStatus.expired;
    this.currentCredit = 0;
  }

  equals(other: any): boolean {
    if (other == null) {
      return false;
    }

    if (this === other) {
      return true;
    }

    if (
      other instanceof UserCredit &&
      this.seq !== null &&
      this.seq === other.seq
    ) {
      return true;
    }
    return false;
  }

  hashCode(): number {
    return this.seq !== null ? this.seq : 0;
  }
}
