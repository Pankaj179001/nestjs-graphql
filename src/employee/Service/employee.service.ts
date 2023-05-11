import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Employee } from '../Entities/employee.entity';
import { Repository } from 'typeorm';
import { CreateEmpDto } from '../Dto/CreateEmployee.input';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee)
    private readonly employeeRepo: Repository<Employee>,
  ) {}

  async findAll() {
    return await this.employeeRepo.find();
  }
  async createEmployee(payload: CreateEmpDto) {
    const emp = this.employeeRepo.create(payload);
    return await this.employeeRepo.save(emp);
  }
}
