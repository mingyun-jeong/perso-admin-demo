import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({
  name: 'role',
  database: 'pers_admin',
})
export class Role {
  @PrimaryGeneratedColumn()
  seq: number;

  @Column()
  name: string;
}
