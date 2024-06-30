import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { LanguageCode } from '../data/language-code';

@Entity('language')
export class Language {
  @PrimaryGeneratedColumn({ name: 'language_code' })
  code: string;

  @Column({ name: 'korean', nullable: false })
  korean: string;

  @Column({ name: 'english', nullable: false })
  english: string;

  constructor(code: string, korean: string, english: string) {
    this.code = code;
    this.korean = korean;
    this.english = english;
  }

  getNameByLanguageCode(languageCode: LanguageCode): string {
    let name = '';

    switch (languageCode) {
      case LanguageCode.KO:
        name = this.korean;
        break;
      case LanguageCode.EN:
        name = this.english;
        break;
    }

    return name;
  }
}
