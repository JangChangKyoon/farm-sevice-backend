import { Field, ArgsType } from '@nestjs/graphql';
import { IsBoolean, IsString, Length } from 'class-validator';

@ArgsType()
export class CreateFarmServiceDto {
  @Field((type) => String)
  @IsString()
  year: string;

  @Field((type) => String)
  @IsString()
  serviceName: string;

  @Field((type) => String)
  @IsString()
  classification: string;

  @Field((type) => String)
  @IsString()
  Amount: String;
}
