import { Args, Query, Resolver, Mutation } from '@nestjs/graphql';
import { FarmService } from './entities/farmService.entity';
import { CreateFarmServiceDto } from './dtos/create-farmService.dto';

@Resolver()
export class FarmServiceResolver {
  // FarmService : entity에서 가져옴
  @Query((type) => [FarmService])
  farmServices(@Args('year') year: string): FarmService[] {
    return [];
  }

  @Mutation((returns) => Boolean)
  createFarmService(
    @Args() createFarmServiceDto: CreateFarmServiceDto,
  ): boolean {
    return true;
  }
}
