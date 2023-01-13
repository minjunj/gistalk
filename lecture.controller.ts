import { Controller, Get, Param } from '@nestjs/common';
import { LectureEntity } from './lecture.entity';
import { LectureService } from './lecture.service';

@Controller('lectures')
export class LectureController {
    constructor(private lectureService: LectureService) { }

    @Get('/:id')
    getLectureById(@Param('id') id: number): Promise<LectureEntity>
    {
        return this.lectureService.getLectureById(id);
    }
}
