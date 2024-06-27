import { ErrorCode, ErrorCodeMessage } from './error-code';

export class PersoAdminException extends Error {
  errorCode: ErrorCode;

  constructor(errorCode: ErrorCode) {
    super(ErrorCodeMessage[errorCode]);
    this.errorCode = errorCode;
  }
}
