import { CreateDateColumn, UpdateDateColumn } from 'typeorm';

export abstract class BaseTimeEntity {
    @CreateDateColumn({ name: 'create_date', nullable: false, update: false })
    createDate: Date;

    @UpdateDateColumn({ name: 'update_date', nullable: false })
    updateDate: Date;
}