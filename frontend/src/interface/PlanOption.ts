import {PlanOptionDetail} from "./PlanOptionDetail";

export interface PlanOption {
  seq: number;
  planSeq: number;
  type: string;
  detail: PlanOptionDetail;
}
