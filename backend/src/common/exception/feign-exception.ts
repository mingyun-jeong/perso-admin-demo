import { ExceptionDto } from './exception.dto';

export class FeignException extends Error {
    errorResponse: ExceptionDto;

    constructor(errorResponse: ExceptionDto) {
        super(errorResponse.message);
        this.errorResponse = errorResponse;
    }
}