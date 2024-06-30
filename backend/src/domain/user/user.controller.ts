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

@Controller('users')
export class UserController {
  constructor(private readonly usersService: UserService) {}

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get()
  async userSearch(
    @Query() request: SearchRequest,
  ): Promise<ApiResult<UsersResponse[]>> {
    const result = this.usersService.searchByKeyword(request);
    return ApiResult.from(result);
  }

  @Get(':seq')
  findOne(@Param('seq') seq: bigint) {
    return this.usersService.findOne(seq);
  }
}
