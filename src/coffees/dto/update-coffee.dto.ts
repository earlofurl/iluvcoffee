import { PartialType } from '@nestjs/mapped-types';
import { CreateCoffeeDto } from './create-coffee.dto';

// PartialType imports all the fields from CreateCoffeeDto as optional
export class UpdateCoffeeDto extends PartialType(CreateCoffeeDto) {}
