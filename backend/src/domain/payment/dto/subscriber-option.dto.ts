import {PlanType} from "../data/plan-type.enum";
import {PlanOptionDetail} from "../data/plan-option-detail";
import {SubscriberDto} from "./subscriber.dto";

export class SubscriberOptionDto {
    seq: number;
    userSeq: number;
    subscriberSeq: number;
    type: PlanType;
    detail: PlanOptionDetail;
    subscriber: SubscriberDto;
}