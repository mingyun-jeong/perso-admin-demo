import { JoinPath } from '../data/join-path.enum';
import { LoginProvider } from '../data/login-provider.enum';
import { UserStatus } from '../data/user-status.enum';

export class UserDto {
    seq: number;
    email: string;
    password: string;
    name: string;
    loginProvider: LoginProvider;
    joinPath: JoinPath;
    userStatus: UserStatus;
    lastLoginDate: Date;
    lastPasswordChangeDate: Date;
    createDate: Date;
    updateDate: Date;
}