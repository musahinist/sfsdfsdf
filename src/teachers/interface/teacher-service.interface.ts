import { ITeacher } from './teacher.interface';

export interface ITeacherService {
    findAll(): Promise<ITeacher[]>;
    findById(ID: number): Promise<ITeacher | null>;
    findOne(options: object): Promise<ITeacher | null>;
    create(user: ITeacher): Promise<ITeacher>;
    update(ID: number, newValue: ITeacher): Promise<ITeacher | null>;
    delete(ID: number): Promise<string>;
}
