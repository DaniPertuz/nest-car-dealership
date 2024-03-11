import { v4 as uuid } from 'uuid';
import { Car } from 'src/cars/interfaces/car.interface';

export const CARS_SEED: Car[] = [
  {
    id: uuid(),
    brand: 'Suzuki',
    model: 'Swift'
  },
  {
    id: uuid(),
    brand: 'Chevrolet',
    model: 'Aveo'
  },
  {
    id: uuid(),
    brand: 'Renault',
    model: 'Logan'
  },
];
