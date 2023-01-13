import { Module } from '@nestjs/common';
import { LectureModule } from './lecture/lecture.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LectureEntity } from './lecture/lecture.entity';

@Module({
  imports: [LectureModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'gistalk-lecture',
      entities: [LectureEntity],
      synchronize: true 
  })],
})
export class AppModule {}