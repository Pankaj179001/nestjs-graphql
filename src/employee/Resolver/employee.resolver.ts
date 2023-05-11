import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Employee } from '../Entities/employee.entity';
import { EmployeeService } from '../Service/employee.service';
import { CreateEmpDto } from '../Dto/CreateEmployee.input';

@Resolver()
export class EmployeeResolver {
  constructor(private readonly Service: EmployeeService) {}
  @Query(() => [Employee], { name: 'findAllEmployees' })
  async findAll() {
    return await this.Service.findAll();
  }
  @Mutation(() => Employee, { name: 'AddEmployee' })
  async CreateEmp(@Args('employee') emp: CreateEmpDto) {
    return await this.Service.createEmployee(emp);
  }
}
