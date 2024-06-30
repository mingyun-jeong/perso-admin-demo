import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { BaseTimeEntity } from '../../../common/entity/base-time.entity';

@Entity({
    name: 'refresh_token',
    database: 'perso_auth'
})
export class RefreshToken extends BaseTimeEntity {

    @PrimaryGeneratedColumn()
    seq: number;

    @Column({ nullable: false })
    userSeq: number;

    @Column({ length: 30, nullable: false })
    clientId: string;

    @Column({ nullable: false })
    refreshToken: string;

    @Column({ type: 'timestamp', nullable: false })
    expireDate: Date;

    constructor(seq: number, userSeq: number, clientId: string, refreshToken: string, expireDate: Date) {
        super();
        this.seq = seq;
        this.userSeq = userSeq;
        this.clientId = clientId;
        this.refreshToken = refreshToken;
        this.expireDate = expireDate;
    }

    getRefreshToken(): string {
        return this.refreshToken;
    }

    updateToken(refreshToken: string, expireDate: Date): void {
        this.refreshToken = refreshToken;
        this.expireDate = expireDate;
    }
}