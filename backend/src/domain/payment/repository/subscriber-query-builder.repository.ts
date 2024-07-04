import {Injectable} from '@nestjs/common';
import {Repository} from 'typeorm';
import {Subscriber} from "../entity/subscriber.entity";
import {InjectRepository} from "@nestjs/typeorm";

@Injectable()
export class SubscriberQueryBuilderRepository {
    constructor(
        @InjectRepository(Subscriber, 'paymentDataSource')
        private subscriberRepository: Repository<Subscriber>,
    ) {}

    async findBy(userSeq: number): Promise<Subscriber[]> {
        const query = this.subscriberRepository.createQueryBuilder('subscriber');
        query.where('subscriber.user_seq = :userSeq', {userSeq: `${userSeq}`});

        return await query.getMany();
    }

    find() {
        return this.subscriberRepository.find();
    }
}
