import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { PlanType } from '../../payment/data/plan-type.enum';
import { InviteTeamUserModels } from '../data/invite-team-user-models';

@Entity('team_invite')
export class TeamInvite {
    @PrimaryGeneratedColumn()
    seq: number;

    @Column({ nullable: false })
    userSeq: number;

    @Column({ nullable: false })
    teamSeq: number;

    @Column({ nullable: false, length: 500 })
    email: string;

    @Column({ nullable: false })
    teamUserRole: string;

    @Column({ type: 'enum', enum: PlanType, nullable: false })
    type: PlanType;

    @Column({ type: 'json' })
    models: InviteTeamUserModels;

    @Column({ nullable: false, type: 'timestamp' })
    expires: Date;

    @Column({ type: 'timestamp' })
    joinDate: Date;

    constructor(userSeq?: number, teamSeq?: number, email?: string, teamUserRole?: string, type?: PlanType, models?: InviteTeamUserModels, expires?: Date, joinDate?: Date) {
        this.userSeq = userSeq || 0;
        this.teamSeq = teamSeq || 0;
        this.email = email || '';
        this.teamUserRole = teamUserRole || '';
        this.type = type || PlanType.studio;
        this.models = models || new InviteTeamUserModels();
        this.expires = expires || new Date();
        this.joinDate = joinDate || new Date();
    }
}