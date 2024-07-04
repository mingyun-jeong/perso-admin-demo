import {PlanPrice} from "./PlanPrice";
import {PlanOption} from "./PlanOption";

export interface Plan {
  seq: number;
  productId: string;
  name: string;
  isActive: boolean;
  isVisible: boolean;
  isDefault: boolean;
  isCustom: boolean;
  priorityTier: string;
  prices: PlanPrice[];
  planOptions: PlanOption[];
}
