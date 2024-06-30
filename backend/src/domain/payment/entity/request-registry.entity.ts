import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity({
  name: 'request_registry',
  database: 'perso_common',
})
export class RequestRegistry {
  @PrimaryGeneratedColumn()
  seq: number;

  @Column()
  idempotencyKey: string;

  @Column()
  responseBody: string;

  @Column()
  statusCode: number;

  @CreateDateColumn({ name: 'create_date', nullable: false })
  createDate: Date;

  constructor(
    idempotencyKey: string,
    responseBody: string,
    statusCode: number,
  ) {
    this.idempotencyKey = idempotencyKey;
    this.responseBody = responseBody;
    this.statusCode = statusCode;
    this.createDate = new Date();
  }
}
