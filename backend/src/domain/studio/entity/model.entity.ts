import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { StudioModelStatus } from '../data/studio-mode-status.enum';

@Entity({
  name: 'model',
  database: 'perso_studio',
})
export class StudioModel {
  @PrimaryGeneratedColumn('increment', { name: 'model_id' })
  modelId: number;

  @Column({ name: 'language_code', nullable: false })
  languageCode: string;

  @Column({ name: 'model_code', nullable: false })
  modelCode: string;

  @Column({
    name: 'status',
    type: 'enum',
    enum: StudioModelStatus,
    nullable: false,
  })
  status: StudioModelStatus;

  @Column({ name: 'create_at', type: 'timestamp', nullable: false })
  createAt: Date;

  @Column({ name: 'update_at', type: 'timestamp' })
  updateAt: Date;

  @Column({ name: 'gender' })
  gender: string;

  @Column({ name: 'sample_voice_path' })
  sampleVoicePath: string;

  @Column({ name: 'is_clone', nullable: false, default: false })
  isClone: boolean;

  @Column({ name: 'use_horizontal_flip', nullable: false, default: false })
  useHorizontalFlip: boolean;

  @Column({ name: 'order_priority', nullable: false, default: 0 })
  orderPriority: number;

  @Column({ name: 'ref_audio', nullable: false })
  refAudio: string;

  @Column({ name: 'ref_face', nullable: false })
  refFace: string;

  @Column({ name: 'stf_ratio', nullable: false, default: 0 })
  stfRatio: number;

  @Column({ name: 'support_audio_source' })
  supportAudioSource: string;

  @Column({ name: 'original_voice_supported_languages' })
  originalVoiceSupportedLanguages: string;

  @Column({ name: 'default_gap_ms' })
  defaultGapMs: number;
}
