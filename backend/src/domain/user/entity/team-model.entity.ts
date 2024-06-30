import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'team_model',
  database: 'perso_user',
})
export class TeamModel {
  @PrimaryGeneratedColumn()
  seq: number;

  @Column({ nullable: true, type: 'int' })
  teamSeq: number;

  @Column({ name: 'model_id', nullable: false })
  modelId: number;

  @Column({ name: 'create_date', type: 'timestamp', nullable: false })
  createDate: Date;

  @Column({ name: 'update_date', type: 'timestamp', nullable: false })
  updateDate: Date;

  constructor(
    seq?: number,
    teamSeq?: number,
    modelId?: number,
    createDate?: Date,
    updateDate?: Date,
  ) {
    this.seq = seq || 0;
    this.teamSeq = teamSeq || 0;
    this.modelId = modelId || 0;
    this.createDate = createDate || new Date();
    this.updateDate = updateDate || new Date();
  }
}
