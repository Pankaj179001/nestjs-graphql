import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Employee } from 'src/employee/Entities/employee.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Project {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  name: string;

  @Field(() => Int)
  @Column()
  code: number;

  @Field(() => [Employee],{nullable:true})
  @OneToMany(() => Employee, (Employee) => Employee.project)
  employees: Employee[];
}
