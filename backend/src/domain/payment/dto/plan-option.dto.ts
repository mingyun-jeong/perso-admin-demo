import { PlanType } from '../data/plan-type.enum';
import { PlanOptionDetail } from '../data/plan-option-detail';

export class PlanOptionDto {
    seq: number;
    planSeq: number;
    type: PlanType;
    detail: PlanOptionDetail;
}