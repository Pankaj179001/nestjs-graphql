import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateEmpDto {
  @Field()
  firstname: string;
  @Field()
  lastname: string;
  @Field()
  designation: string;
  @Field()
  city?: string;
  @Field(() => Int)
  projectId?: number;
}
