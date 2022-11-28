import { FarmServiceResolver } from './farmService.resolver';
import { Module } from '@nestjs/common';

@Module({ providers: [FarmServiceResolver] })
export class FarmServiceModule {}
