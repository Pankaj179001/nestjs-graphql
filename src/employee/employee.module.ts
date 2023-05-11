import { Module } from '@nestjs/common';
import { EmployeeService } from './Service/employee.service';
import { EmployeeResolver } from './Resolver/employee.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from './Entities/employee.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Employee])],
  providers: [EmployeeService, EmployeeResolver],
})
export class EmployeeModule {}
 