import { Controller, Get, Put, Delete, Post, Param, Body } from '@nestjs/common';

import { TeachersService } from './teachers.service';
import { ITeacher } from './interface/teacher.interface';
import { CreateTeacherDto } from './dto/create-teacher.dto';

@Controller('teachers')
export class TeachersController {

    constructor(private readonly teacherService: TeachersService) { }

    @Get()
    async findAll(/*@Query() teacher: TeacherModel*/): Promise<ITeacher[]> {
        // query ile limit ayarlanabilir
        // return `Gel all teacher ${teacher.brans}`;
        return await this.teacherService.findAll();
    }

    // BU bölümü biraz daha araştır @Query e bak
    @Get('find')
    async findOne(@Body() body: object): Promise<ITeacher> {
        return await this.teacherService.findOne(body);
    }

    @Get(':id')
    async findById(@Param('id') id: string): Promise<ITeacher> {
        return await this.teacherService.findById(id);
    }

    @Post()
    async create(@Body() createTeacher: CreateTeacherDto): Promise<ITeacher> {
        return await this.teacherService.create(createTeacher);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() updateTeacher: CreateTeacherDto): Promise<ITeacher> {
        return await this.teacherService.update(id, updateTeacher);
    }

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<ITeacher> {
        return await this.teacherService.delete(id);
    }

}
