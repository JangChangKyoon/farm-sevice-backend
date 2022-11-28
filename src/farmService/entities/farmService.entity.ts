import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class FarmService {
  @Field((type) => String)
  year: string;

  @Field((type) => String)
  serviceName: string;

  @Field((type) => String)
  classification: string;

  @Field((type) => String)
  account: string;
}
