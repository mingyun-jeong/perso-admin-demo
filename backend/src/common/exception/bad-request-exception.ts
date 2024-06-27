import { HttpStatus } from '@nestjs/common';

export class BadRequestException extends Error {
  code: string;
  status: HttpStatus;

  constructor(message: string, code: string, status: HttpStatus) {
    super(message);
    this.code = code;
    this.status = status;
  }
}
