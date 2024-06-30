import { Entity, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Admin } from './admin.entity';
import { Role } from './role.entity';

@Entity({
  name: 'admin_roles',
  database: 'pers_admin',
})
export class AdminRoles {
  @PrimaryColumn({ name: 'admin_seq' })
  adminSeq: number;

  @PrimaryColumn({ name: 'roles_seq' })
  rolesSeq: number;

  @ManyToOne(() => Admin, admin => admin.adminRoles, { eager: true })
  @JoinColumn({ name: 'adminSeq', referencedColumnName: 'seq' })
  admin: Admin;

  @ManyToOne(() => Role)
  @JoinColumn({ name: 'rolesSeq', referencedColumnName: 'seq' })
  role: Role;
}
