import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class LectureEntity {
    @PrimaryColumn()
    id : number;
    
    @Column()
    lecture_name: string;

    @Column()
    lecture_code: string;
}