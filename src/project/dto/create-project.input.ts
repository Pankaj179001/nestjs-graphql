import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateProject {
  @Field()
  name: string;

  @Field(() => Int)
  code: number;
}
 