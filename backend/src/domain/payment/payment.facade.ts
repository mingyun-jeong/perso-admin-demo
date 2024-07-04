import {SubscriberService} from "./service/subscriber.service";
import {Injectable} from "@nestjs/common";
import {Subscriber} from "./entity/subscriber.entity";

@Injectable()
export class PaymentFacade {
    constructor(
        private subscriberService: SubscriberService
    ) {
    }

    findAll() {
        return this.subscriberService.findAll();
    }

    getUserSubscription(userSeq: number): Promise<Subscriber[]> {
        return this.subscriberService.findByUserSeq(userSeq);
    }
}
