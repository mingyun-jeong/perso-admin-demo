import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudioModel } from './entity/model.entity';
import { Language } from './entity/language.entity';
import { StudioController } from './studio.controller';
import { StudioService } from './service/studio.service';

@Module({
  imports: [TypeOrmModule.forFeature([StudioModel, Language])],
  controllers: [StudioController],
  providers: [StudioService],
})
export class StudioModule {}
