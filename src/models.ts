export class Prodaction{
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
    color: Array<string>;
    size: Array<number>;
    category_id: number;
}

export class Category{
    id:number;
    name:string;
}
export class LoginResponse{
    token:string;
}
export class UserId{
    id:number;
}
export class Company{
    id: number;
    name: string;
    description: string;
    city:string;
    address:string;
}

export class Order{
  id: number;
  owner: number;
  date: Date;
  status: string;
  products: Array<number>;
}
