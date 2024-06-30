import { PlanType } from '../../payment/data/plan-type.enum';
import { PlanOptionDetail } from '../../payment/data/plan-option-detail';

export class TeamUserDetail {
  userSeq: number;
  email: string;
  teamUserRole: string;
  teamJoinStatus: string;
  type: PlanType;
  options: PlanOptionDetail;

  constructor(
    userSeq: number,
    email: string,
    teamUserRole: string,
    teamJoinStatus: string,
    type: PlanType,
    options: PlanOptionDetail,
  ) {
    this.userSeq = userSeq;
    this.email = email;
    this.teamUserRole = teamUserRole;
    this.teamJoinStatus = teamJoinStatus;
    this.type = type;
    this.options = options;
  }
}
