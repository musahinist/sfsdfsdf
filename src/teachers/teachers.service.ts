import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';

import { ITeacher } from './interface/teacher.interface';
import { CreateTeacherDto } from './dto/create-teacher.dto';

@Injectable()
export class TeachersService {

    constructor(@InjectModel('Teacher') private readonly teacherModel: Model<ITeacher>) { }

    async findAll(): Promise<ITeacher[]> {
        return await this.teacherModel.find().exec();
    }

    async findOne(options: object): Promise<ITeacher> {
        return await this.teacherModel.findOne(options).exec();
    }

    async findById(id: string): Promise<ITeacher> {
        return await this.teacherModel.findById(id).exec();
    }
    async create(createTeacher: CreateTeacherDto): Promise<ITeacher> {
        const newTeacher = new this.teacherModel(createTeacher);
        return await newTeacher.save();
    }
    async update(id: string, updateTeacher: CreateTeacherDto): Promise<ITeacher> {
        return await this.teacherModel.findByIdAndUpdate(id, updateTeacher, { new: true });
    }
    async delete(id: string): Promise<ITeacher> {
        return await this.teacherModel.findByIdAndRemove(id);
    }
}
