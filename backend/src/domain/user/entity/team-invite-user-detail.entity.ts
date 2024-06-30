import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';
import { PlanType } from '../../payment/data/plan-type.enum';

@Entity({
  name: 'team_invite_user_detail',
  database: 'perso_user',
})
export class TeamInviteUserDetail {
  @PrimaryGeneratedColumn()
  seq: number;

  @Column({ length: 500, nullable: false })
  email: string;

  @Column({ nullable: false })
  teamUserRole: string;

  @Column({ nullable: false })
  teamJoinStatus: string;

  @Column({ type: 'enum', enum: PlanType })
  type: PlanType;

  @Column({ type: 'timestamp', nullable: false })
  expires: Date;

  // For complex objects, you can use JSON type
  @Column({ type: 'json' })
  inviteTeamUserModels: any;

  constructor(
    seq: number,
    email: string,
    teamUserRole: string,
    teamJoinStatus: string,
    type: PlanType,
    expires: Date,
    inviteTeamUserModels: any,
  ) {
    this.seq = seq;
    this.email = email;
    this.teamUserRole = teamUserRole;
    this.teamJoinStatus = teamJoinStatus;
    this.type = type;
    this.expires = expires;
    this.inviteTeamUserModels = inviteTeamUserModels;
  }
}
