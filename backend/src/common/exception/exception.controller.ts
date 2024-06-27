import { Catch, ExceptionFilter, ArgumentsHost, HttpStatus } from '@nestjs/common';
import { ErrorResponse } from './error-response';
import { ErrorCode } from './error-code';
import { PersoAdminException } from './perso-admin-exception';
import { BadRequestException } from './bad-request-exception';

@Catch()
export class ExceptionController implements ExceptionFilter {
    catch(exception: any, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        let status = HttpStatus.INTERNAL_SERVER_ERROR;
        let errorResponse: ErrorResponse;

        if (exception instanceof PersoAdminException) {
            errorResponse = ErrorResponse.from(exception.errorCode);
        } else if (exception instanceof BadRequestException) {
            errorResponse = new ErrorResponse(exception.code, exception.message, exception.status);
            status = exception.status;
        } else {
            errorResponse = new ErrorResponse('500', '알 수 없는 에러', HttpStatus.INTERNAL_SERVER_ERROR);
        }

        response.status(status).json(errorResponse);
    }
}