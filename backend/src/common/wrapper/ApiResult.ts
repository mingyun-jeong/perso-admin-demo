export class ApiResult<T> {
    result: T | null;

    constructor(result: T | null) {
        this.result = result;
    }

    static defaultResult(): ApiResult<void> {
        return new ApiResult<void>(null);
    }

    static from<T>(result: T): ApiResult<T> {
        return new ApiResult<T>(result);
    }
}