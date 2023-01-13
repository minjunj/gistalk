import { Injectable } from "@nestjs/common";
import { LectureEntity } from "./lecture.entity";
import { Repository } from "typeorm";

@Injectable()
export class LectureRepository extends Repository<LectureEntity> {
    
}