import { HttpStatus } from '@nestjs/common';
import { ErrorCode, ErrorCodeMessage, ErrorCodeStatus } from './error-code';

export class ErrorResponse {
  code: string;
  message: string;
  status: HttpStatus;

  constructor(code: string, message: string, status: HttpStatus) {
    this.code = code;
    this.message = message;
    this.status = status;
  }

  static from(errorCode: ErrorCode): ErrorResponse {
    return new ErrorResponse(
      errorCode,
      ErrorCodeMessage[errorCode],
      ErrorCodeStatus[errorCode],
    );
  }
}
