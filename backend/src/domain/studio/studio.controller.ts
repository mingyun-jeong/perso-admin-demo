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
import { StudioService } from './service/studio.service';

@Controller('studio')
export class StudioController {
  constructor(private readonly studioService: StudioService) {}

  @Get()
  findAll() {
    return this.studioService.findAll();
  }
}
