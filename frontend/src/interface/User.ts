export interface User {
  seq: number;
  email: string;
  password: string;
  name: string;
  loginProvider: string;
  joinPath: string;
  userStatus: string;
  lastLoginDate: Date;
  lastPasswordChangeDate: Date;
  createDate: Date;
}
