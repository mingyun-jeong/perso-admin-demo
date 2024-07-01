import { Injectable } from '@nestjs/common';
import { UserService } from "./service/user.service";
import { SubscriberService } from "../payment/service/subscriber.service";
import { PlanService } from "../payment/service/plan.service";
import { SearchType } from "../../common/data/search-type.enum";
import {UsersResponse} from "../../common/response/users-response";
import {User} from "./entity/user.entity";

@Injectable()
export class UserFacade {
    constructor(
        private userService: UserService,
    ) {}

    findAll() {
        return this.userService.findAll();
    }

    searchByKeyword(condition: SearchType, keyword: string) : Promise<User[]> {
        return this.userService.searchByKeyword(condition, keyword);
    }

    findOne(seq: bigint) {
        
    }
}
