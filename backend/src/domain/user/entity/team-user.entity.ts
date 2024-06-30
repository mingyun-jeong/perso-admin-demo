import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { TeamUserStatus } from '../data/team-user-status.enum';

@Entity({
  name: 'team_user',
  database: 'perso_user',
})
export class TeamUser {
  @PrimaryGeneratedColumn()
  seq: number;

  @Column({ nullable: false })
  teamSeq: number;

  @Column({ nullable: false })
  userSeq: number;

  @Column({ type: 'enum', enum: TeamUserStatus, nullable: false })
  status: TeamUserStatus;

  @Column({ nullable: false })
  teamUserRole: string;

  constructor(
    teamSeq: number,
    userSeq: number,
    status: TeamUserStatus,
    teamUserRole: string,
  ) {
    this.teamSeq = teamSeq;
    this.userSeq = userSeq;
    this.status = status;
    this.teamUserRole = teamUserRole;
  }

  setTeamUserRole(teamUserRole: string[]) {
    this.teamUserRole = teamUserRole.join();
  }

  setStatus(status: TeamUserStatus) {
    this.status = status;
  }
}
