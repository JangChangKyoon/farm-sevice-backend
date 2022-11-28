import { Args, Query, Resolver, Mutation } from '@nestjs/graphql';
import { FarmService } from './entities/farmService.entity';

@Resolver()
export class FarmServiceResolver {
  @Query((type) => [FarmService])
  farmServices(@Args('year') year: string) {
    return [];
  }

  @Mutation((returns) => Boolean)
  createFarmService() {
    return true;
  }
}
