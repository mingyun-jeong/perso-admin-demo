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
import { PlanService } from './service/plan.service';

@Controller('users')
export class PaymentController {}
