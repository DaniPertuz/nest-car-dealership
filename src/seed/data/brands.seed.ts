import { Brand } from 'src/brands/entities/brand.entity';
import { v4 as uuid } from 'uuid';

export const BRANDS_SEED: Brand[] = [
  {
    id: uuid(),
    name: 'Suzuki',
    createdAt: new Date().getTime()
  },
  {
    id: uuid(),
    name: 'Chevrolet',
    createdAt: new Date().getTime()
  },
  {
    id: uuid(),
    name: 'Renault',
    createdAt: new Date().getTime()
  },
];
