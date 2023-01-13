import { Injectable, NotFoundException } from '@nestjs/common';
import { LectureEntity } from './lecture.entity';
import { LectureRepository } from './lecture.repository';

@Injectable()
export class LectureService {
    constructor(
        private lectureRepository: LectureRepository
    ) { }
    

    async getLectureById(id: any): Promise <LectureEntity> // findOneBy 쪽 에러 발생 -> id 타입 number에서 any로 바꿈
    {
        const found = await this.lectureRepository.findOneBy(id);

        if(!found)
        {
            throw new NotFoundException(`Can't find lecture with id ${id}`);
        }
        return found;
    }
}
