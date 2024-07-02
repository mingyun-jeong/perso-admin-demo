import { JoinPath } from '../data/join-path.enum';
import { LoginProvider } from '../data/login-provider.enum';
import { UserStatus } from '../data/user-status.enum';
import { User } from '../entity/user.entity';

export class UserDto {
  seq: number;
  email: string;
  name: string;
  loginProvider: LoginProvider;
  joinPath: JoinPath;
  userStatus: UserStatus;
  lastLoginDate: Date;
  lastPasswordChangeDate: Date;
  createDate: Date;
  updateDate: Date;

  constructor(
    seq: number,
    email: string,
    name: string,
    loginProvider: LoginProvider,
    joinPath: JoinPath,
    userStatus: UserStatus,
    lastLoginDate: Date,
    lastPasswordChangeDate: Date,
    createDate: Date,
    updateDate: Date,
  ) {
    this.seq = seq;
    this.email = email;
    this.name = name;
    this.loginProvider = loginProvider;
    this.joinPath = joinPath;
    this.userStatus = userStatus;
    this.lastLoginDate = lastLoginDate;
    this.lastPasswordChangeDate = lastPasswordChangeDate;
    this.createDate = createDate;
    this.updateDate = updateDate;
  }

  static create(user: User) {
    return new UserDto(
      user.seq,
      user.email,
      user.name,
      user.loginProvider,
      user.joinPath,
      user.userStatus,
      user.lastLoginDate,
      user.lastPasswordChangeDate,
      user.createDate,
      user.updateDate,
    );
  }
}
