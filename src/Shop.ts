import { Classification } from './Classification.enum';

export interface Category {
  id: number;
  name: string;
  classification: Classification;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  color: Array<string>;
  size: Array<number>;
  category_id: number;
}

