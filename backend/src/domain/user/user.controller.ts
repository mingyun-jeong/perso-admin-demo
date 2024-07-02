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
import { SearchRequest } from '../../common/request/search-request';
import { UserFacade } from './user.facade';
import { UserDto } from './dto/user.dto';

@Controller('users')
export class UserController {
  constructor(private userFacade: UserFacade) {}

  @Get()
  findAll() {
    return this.userFacade.findAll();
  }

  @Get('/search')
  async userSearch(@Query() request: SearchRequest): Promise<UserDto[]> {
    return this.userFacade.searchByKeyword(request.condition, request.keyword);
  }

  @Get(':seq')
  findOne(@Param('seq') seq: bigint) {
    return this.userFacade.findOne(seq);
  }
}
