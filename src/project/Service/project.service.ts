import { Injectable } from '@nestjs/common';
import { CreateProject } from '../dto/create-project.input';
import { UpdateProjectInput } from '../dto/update-project.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Project } from '../entities/project.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(Project) private readonly project: Repository<Project>,
  ) {}

  async create(createProjectInput: CreateProject) {
    const data = this.project.create(createProjectInput);
    return await this.project.save(data);
  }

  async findAll() {
    return await this.project.find({relations:["employees"]});
  }

  async findOne(id: number) {
    return await this.project.findOne({ where: { id } });
  }

  async update(id: number, updateProjectInput: UpdateProjectInput) {
    return await this.project.update(id, updateProjectInput);
  } 

  remove(id: number) {
    return `This action removes a #${id} project`;
  }
}
