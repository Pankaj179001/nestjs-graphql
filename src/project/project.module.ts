import { Module } from '@nestjs/common';
import { ProjectService } from './Service/project.service';
import { ProjectResolver } from './Resolver/project.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Project } from './entities/project.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Project])],
  providers: [ProjectResolver, ProjectService,],
})
export class ProjectModule {}
