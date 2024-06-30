import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { OAuth2Provider } from '../data/oauth2-provider.enum';

@Entity({
  name: 'social_user',
  database: 'perso_user',
})
export class SocialUser {
  @PrimaryGeneratedColumn()
  seq: number;

  @Column({ name: 'user_seq', nullable: false })
  userSeq: number;

  @Column({ type: 'enum', enum: OAuth2Provider, nullable: false })
  provider: OAuth2Provider;

  @Column({ nullable: false })
  subId: string;
}
