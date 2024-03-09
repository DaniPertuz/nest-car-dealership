import { Body, Controller, Delete, Get, NotFoundException, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDTO } from './dto/create-car.dto';
import { UpdateCarDTO } from './dto/update-car.dto';

@Controller('cars')
// @UsePipes(ValidationPipe)
export class CarsController {

  constructor(
    private readonly carsService: CarsService
  ) { }

  @Get()
  getAllCars() {
    return this.carsService.findAll();
  }

  @Get(':id')
  getCarById(@Param('id', ParseUUIDPipe) id: string) {
    return this.carsService.findOneById(id);
  }

  @Post()
  createCar(@Body() createCarDTO: CreateCarDTO) {
    return this.carsService.create(createCarDTO);
  }

  @Patch(':id')
  updateCar(@Param('id') id: string, @Body() updateCarDto: UpdateCarDTO) {
    return this.carsService.update(id, updateCarDto);
  }

  @Delete(':id')
  deleteCar(@Param('id', ParseUUIDPipe) id: string) {
    return this.carsService.delete(id);
  }
}
