import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { AdminRoles } from './admin-roles.entity';
import { AdminStatus } from '../data/admin-status.enum';

@Entity({
  name: 'admin',
  database: 'pers_admin',
})
export class Admin {
  @PrimaryGeneratedColumn()
  seq: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  name: string;

  @OneToMany(type => AdminRoles, adminRoles => adminRoles.admin)
  adminRoles: AdminRoles[];

  @Column()
  phone: string;

  @Column()
  isActive: boolean;

  @Column({ type: 'enum', enum: AdminStatus, nullable: false })
  adminStatus: AdminStatus;

  @Column()
  failedAttempts: number;

  @Column({ type: 'timestamp' })
  lastLoginDate: Date;

  @Column({ type: 'timestamp' })
  createDate: Date;

  @Column({ type: 'timestamp' })
  updateDate: Date;

  @Column({ type: 'timestamp' })
  passwordUpdateDate: Date;

  constructor(
    email: string,
    password: string,
    name: string,
    phone: string,
    isActive: boolean,
    adminStatus: AdminStatus,
    failedAttempts: number,
    lastLoginDate: Date,
    createDate: Date,
    updateDate: Date,
    passwordUpdateDate: Date,
  ) {
    this.email = email;
    this.password = password;
    this.name = name;
    this.phone = phone;
    this.isActive = isActive;
    this.adminStatus = adminStatus;
    this.failedAttempts = failedAttempts;
    this.lastLoginDate = lastLoginDate;
    this.createDate = createDate;
    this.updateDate = updateDate;
    this.passwordUpdateDate = passwordUpdateDate;
  }

  setFailedAttempts(newFailAttempts: number) {
    this.failedAttempts = newFailAttempts;
  }
}
