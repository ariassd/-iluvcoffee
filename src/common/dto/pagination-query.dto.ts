import { Type } from 'class-transformer';
import { IsOptional, IsPositive } from 'class-validator';

export class PaginationQueryDto {
  @IsOptional()
  @IsPositive()
  // @Type(() => Number) 👈 specified in main.ts -> transformOptions -> enableImplicitConversion: true,
  limit: number;

  @IsOptional()
  @IsPositive()
  // @Type(() => Number) 👈 specified in main.ts -> transformOptions -> enableImplicitConversion: true,
  offset: number;
}
