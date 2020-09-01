import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentsModule } from './students/students.module';
import { TeachersModule } from './teachers/teachers.module';
import { AuthModule } from './auth/auth.module';
import config from '../config/key';
@Module({
  imports: [TeachersModule, StudentsModule, MongooseModule.forRoot(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true }), AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
