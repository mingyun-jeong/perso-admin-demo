import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  Res,
} from '@nestjs/common';
import { UserService } from './service/user.service';
import { SearchRequest } from '../../common/request/search-request';
import { ApiResult } from '../../common/wrapper/api-result';
import { UsersResponse } from '../../common/response/users-response';
import {UserFacade} from "./user.facade";
import {User} from "./entity/user.entity";

@Controller('users')
export class UserController {
  constructor(private userFacade: UserFacade) {}

  @Get()
  findAll() {
    return this.userFacade.findAll();
  }

  @Get('/search')
  async userSearch(@Query() request: SearchRequest)  : Promise<User[]> {
    return this.userFacade.searchByKeyword(request.condition, request.keyword);
  }

  @Get(':seq')
  findOne(@Param('seq') seq: bigint) {
    return this.userFacade.findOne(seq);
  }
}
