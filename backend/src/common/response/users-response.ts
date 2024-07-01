export class UsersResponse {
  userSeq: number;
  email: string;
  provider: string;
  userStatus: string;
  createDate: Date;

  constructor(
    userSeq: number,
    email: string,
    provider: string,
    userStatus: string,
    createDate: Date,
  ) {
    this.userSeq = userSeq;
    this.email = email;
    this.provider = provider;
    this.userStatus = userStatus;
    this.createDate = createDate;
  }
}
