import {PlanPriceDto} from "./plan-price.dto";
import {PlanOptionDto} from "./plan-option.dto";

export class PlanDto {
    seq: number;
    productId: string;
    name: string;
    isActive: boolean;
    isVisible: boolean;
    isDefault: boolean;
    isCustom: boolean;
    priorityTier: string;
    prices: PlanPriceDto[];
    planOptions: PlanOptionDto[];
}