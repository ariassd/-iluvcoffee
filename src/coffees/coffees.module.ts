import { Module } from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CoffeesController } from './coffees.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Coffee } from './entities/coffee.entity';
import { Flavor } from './entities/flavor.entity';
import { Event } from '../events/entities/event.entity';
import { COFFEE_BRANDS } from './coffees.constants';
import { Connection } from 'typeorm';
import { ConfigModule } from '@nestjs/config';
import coffeesConfig from './config/coffees.config';

@Module({
  imports: [
    TypeOrmModule.forFeature([Coffee, Flavor, Event]),
    ConfigModule.forFeature(coffeesConfig),
  ],
  controllers: [CoffeesController],
  providers: [
    CoffeesService,
    {
      provide: COFFEE_BRANDS,
      useFactory: () => ['buddy brew', 'nescafe'],
      // useFactory: async (connection: Connection): Promise<string[]> => {
      //   // const coffeeBrands = await connection.query('SELECT * ...');
      //   const coffeeBrands = await Promise.resolve(['buddy brew', 'nescafe']);
      //   console.log('[!] Async factory');
      //   return coffeeBrands;
      // },
      // inject: [Connection],
    },
  ],
  exports: [CoffeesService],
})
export class CoffeesModule {}
