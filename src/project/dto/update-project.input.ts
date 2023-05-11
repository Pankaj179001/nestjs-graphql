import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateProjectInput {
  @Field(() => Int)
  id!: number;

  @Field({ nullable: true })
  name: string;

  @Field(() => Int, { nullable: true })
  code: number;
}
