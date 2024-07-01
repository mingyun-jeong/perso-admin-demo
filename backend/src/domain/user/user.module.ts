import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './service/user.service';
import { UserController } from './user.controller';

import { SocialUser } from './entity/social-user.entity';
import { Team } from './entity/team.entity';
import { TeamInvite } from './entity/team-invite.entity';
import { TeamInviteUserDetail } from './entity/team-invite-user-detail.entity';
import { TeamModel } from './entity/team-model.entity';
import { TeamUser } from './entity/team-user.entity';
import { TeamUserDetail } from './data/team-user-detail';
import { User } from './entity/user.entity';
import {UserQueryBuilderRepository} from "./repository/user-query-builder.repository";
import {UserFacade} from "./user.facade";
import {PlanService} from "../payment/service/plan.service";
import {SubscriberService} from "../payment/service/subscriber.service";

@Module({
  imports: [
    TypeOrmModule.forFeature([
      User,
      SocialUser,
      Team,
      TeamInvite,
      TeamInviteUserDetail,
      TeamModel,
      TeamUser,
      TeamUserDetail,
    ]),
  ],
  controllers: [UserController],
  providers: [UserFacade, UserService, UserQueryBuilderRepository],
})
export class UserModule {}
