import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuidv4 } from 'uuid';
import { CreateCarDTO, UpdateCarDTO } from './dto';

@Injectable()
export class CarsService {
  private cars: Car[] = [
    {
      id: uuidv4(),
      brand: 'Toyota',
      model: 'Corolla'
    },
    {
      id: uuidv4(),
      brand: 'Renault',
      model: 'Sandero'
    },
    {
      id: uuidv4(),
      brand: 'Jeep',
      model: 'Cherokee'
    }
  ];

  findAll() {
    return this.cars;
  }

  findOneById(id: string) {
    const car = this.cars.find(car => car.id === id);

    if (!car) throw new NotFoundException(`Car with ID '${id}' not found`);

    return car;
  }

  create(createCarDto: CreateCarDTO) {
    const car: Car = {
      id: uuidv4(),
      ...createCarDto
    };

    this.cars.push(car);

    return car;
  }

  update(id: string, updateCarDto: UpdateCarDTO) {
    let carDB = this.findOneById(id);

    if (updateCarDto.id && updateCarDto.id !== id)
      throw new BadRequestException(`Car ID is not valid`);

    this.cars = this.cars.map(car => {
      if (car.id === id) {
        carDB = {
          ...carDB,
          ...updateCarDto,
          id
        };
        return carDB;
      }

      return car;
    });

    return carDB;
  }

  delete(id: string) {
    const car = this.findOneById(id);

    this.cars = this.cars.filter(car => car.id !== id);
  }

  fillCarsWithSeedData(cars: Car[]) {
    this.cars = cars;
  }
}
