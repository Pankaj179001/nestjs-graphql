import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ProjectService } from '../Service/project.service';
import { Project } from '../entities/project.entity';
import { CreateProject } from '../dto/create-project.input';
import { UpdateProjectInput } from '../dto/update-project.input';
import { ParseIntPipe } from '@nestjs/common';

@Resolver(() => Project)
export class ProjectResolver {
  constructor(private readonly projectService: ProjectService) {}

  @Mutation(() => Project, { name: 'newProject' })
  async createProject(
    @Args('createProject') createProjectInput: CreateProject,
  ) {
    return await this.projectService.create(createProjectInput);
  }

  @Query(() => [Project], { name: 'AllProject' })
  findAll() {
    return this.projectService.findAll();
  }

  @Query(() => Project, { name: 'Project' })
  findOne(@Args('id', ParseIntPipe) id: number) {
    return this.projectService.findOne(id);
  }

  @Mutation(() => Project,{name:"ProjectUpdate"})
  updateProject(@Args('update') project: UpdateProjectInput) {
    return this.projectService.update(project.id, project);
  }

  @Mutation(() => Project)
  removeProject(@Args('id', { type: () => Int }) id: number) {
    return this.projectService.remove(id);
  }
}
