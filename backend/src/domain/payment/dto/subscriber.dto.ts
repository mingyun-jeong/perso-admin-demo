import {PlanPriceDto} from "./plan-price.dto";
import {SubscriptionStatus} from "../data/subscription-status.enum";
import {PlanDivision} from "../data/plan-division.enum";
import {PlanDto} from "./plan.dto";
import {SubscriberOptionDto} from "./subscriber-option.dto";

export class SubscriberDto {
    seq: number;
    userSeq: number;
    planSeq: number;
    planPriceSeq: number;
    customerId: string;
    subscriptionId: string;
    status: SubscriptionStatus;
    division: PlanDivision;
    isCancellationScheduled: boolean;
    startDate: Date;
    endDate: Date;
    cancelDate: Date;
    endedDate: Date;
    subscriberOptions: SubscriberOptionDto[];
    plan: PlanDto;
    planPrice: PlanPriceDto;
}
