import { HttpStatus } from '@nestjs/common';

export enum ErrorCode {
    VALIDATION_ERROR = "C4001",
    USER_NOT_FOUND_ERROR = "C4002",
    NOT_FOUND_ERROR_CODE = "A0000",
    ROLE_NAME_NOT_FOUND = "A1003",
    MEMBER_NOT_FOUND = "A1004",
    MEMBER_NOT_ALLOWED = "A1005",
    ALREADY_TEAM_USER = "A1006",
    NOT_FOUND_MODEL = "A1007",
    NOT_NORMAL_PLAN = "A1008",
    NOT_FOUND_TEAM = "A1009",
    NOT_FOUND_TEAM_USER = "A1010",
    NOT_INVITABLE_PLAN = "A1011",
    NOT_NORMAL_STATUS = "A1012",
    NOT_INVITABLE_USER = "A1031",
    NOT_FOUND_SUBSCRIBER = "A1013",
    SERVICE_UNAVAILABLE_ERROR = "A1001",
    NOT_FOUND_PLAN = "A1014",
    NOT_FOUND_PLAN_DETAIL = "A1015",
    TEAM_UPDATE_FAILED = "A1016",
    NOT_FOUND_TEAM_ADMIN = "A1017",
    DUPLICATE_PLAN_NAME = "A1018",
    ALREADY_INVITED_USER = "A1019",
    AES_ENCRYPTION_ERROR = "A1020",
    LOGIN_FAIL_OVERFLOW_ERROR = "A1021",
    UNAUTHORIZED = "A1022",
    MISMATCH_PASSWORD = "A1023",
    MISMATCH_NEW_PASSWORD = "A1024",
    INVALID_PASSWORD_FORMAT = "A1025",
    NOT_FOUND_SUBSCRIPTION = "A1026",
}

export const ErrorCodeMessage = {
    [ErrorCode.VALIDATION_ERROR]: "유효성 검사 에러입니다",
    [ErrorCode.USER_NOT_FOUND_ERROR]: "해당 유저를 찾을 수 없습니다",
    // ... add the rest of the error messages here
}

export const ErrorCodeStatus = {
    [ErrorCode.VALIDATION_ERROR]: HttpStatus.BAD_REQUEST,
    [ErrorCode.USER_NOT_FOUND_ERROR]: HttpStatus.BAD_REQUEST,
    // ... add the rest of the HttpStatus here
}