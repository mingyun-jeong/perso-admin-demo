import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { TeamStatus } from '../data/team-status.enum';

@Entity('team')
export class Team {
    @PrimaryGeneratedColumn()
    seq: number;

    @Column({ nullable: false, length: 200 })
    name: string;

    @Column({ type: 'enum', enum: TeamStatus, nullable: false })
    status: TeamStatus;

    @Column({ length: 500 })
    profileImage: string;

    @Column({ length: 2000 })
    profileThumbnail: string;

    constructor(seq?: number, name?: string, profileImage?: string, profileThumbnail?: string, status?: TeamStatus) {
        this.seq = seq || 0;
        this.name = name || '';
        this.profileImage = profileImage || '';
        this.profileThumbnail = profileThumbnail || '';
        this.status = status || TeamStatus.active;
    }
}