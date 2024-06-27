import { HttpStatus } from '@nestjs/common';
import { ErrorCode, ErrorCodeMessage, ErrorCodeStatus } from './error-code';

export class ExceptionDto {
    code: string;
    message: string;
    status: HttpStatus;

    constructor(code: string, message: string, status: HttpStatus) {
        this.code = code;
        this.message = message;
        this.status = status;
    }

    static from(errorCode: ErrorCode): ExceptionDto {
        return new ExceptionDto(
            errorCode,
            ErrorCodeMessage[errorCode],
            ErrorCodeStatus[errorCode]
        );
    }
}