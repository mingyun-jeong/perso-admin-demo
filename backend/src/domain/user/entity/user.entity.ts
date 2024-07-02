import { Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';
import { JoinPath } from '../data/join-path.enum';
import { LoginProvider } from '../data/login-provider.enum';
import { UserStatus } from '../data/user-status.enum';
import { BaseTimeEntity } from '../../../common/entity/base-time.entity';

@Entity({
  name: 'user',
  database: 'perso_user',
})
@Unique('UK_email', ['email'])
export class User extends BaseTimeEntity {
  @PrimaryGeneratedColumn()
  seq: number;

  @Column({ nullable: false, length: 330 })
  email: string;

  @Column()
  password: string;

  @Column()
  name: string;

  @Column({
    type: 'enum',
    enum: LoginProvider,
    name: 'login_provider',
    nullable: false,
  })
  loginProvider: LoginProvider;

  @Column({ type: 'enum', enum: JoinPath, name: 'join_path', nullable: false })
  joinPath: JoinPath;

  @Column({
    type: 'enum',
    enum: UserStatus,
    name: 'user_status',
    nullable: false,
  })
  userStatus: UserStatus;

  @Column({ type: 'timestamp', name: 'last_login_date', nullable: false })
  lastLoginDate: Date;

  @Column({
    type: 'timestamp',
    name: 'last_password_change_date',
    nullable: false,
  })
  lastPasswordChangeDate: Date;

  constructor(
    email: string,
    password: string,
    name: string,
    loginProvider: LoginProvider,
    joinPath: JoinPath,
    userStatus: UserStatus,
  ) {
    super();
    this.email = email;
    this.password = password;
    this.name = name;
    this.loginProvider = loginProvider;
    this.joinPath = joinPath;
    this.userStatus = userStatus;
    this.lastLoginDate = new Date();
    this.lastPasswordChangeDate = new Date();
  }

  updateLastLoginDate() {
    this.lastLoginDate = new Date();
  }

  updatePassword(password: string) {
    this.password = password;
  }

  updateName(name: string) {
    this.name = name;
  }

  updateStatus(userStatus: UserStatus) {
    this.userStatus = userStatus;
  }
}
