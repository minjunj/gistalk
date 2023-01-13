import { Module } from '@nestjs/common';
import { LectureController } from './lecture.controller';
import { LectureService } from './lecture.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LectureRepository } from './lecture.repository';
import { LectureEntity } from './lecture.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LectureEntity])],
  controllers: [LectureController],
  providers: [LectureService, LectureRepository]
})
export class LectureModule {}
