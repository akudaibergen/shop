import { Category, Product } from './../Shop';
import { categories } from './Category';
import { products } from './products';
import { Injectable } from '@angular/core';
import { Observable, of, range } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class Category_productService {

  productsMen: Product[] = [];
  productsWomen: Product[] = [];
  productsKid: Product[] = [];

  private productsUrl = 'api/products';

  constructor(
    private http: HttpClient
  ) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getProducts(): Observable<Product[]>
  {
    return of(products);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  getProduct(id:number): Observable<Product>
  {
    return of(products.find(product => product.id === id));
  }

  getCategories(): Observable<Category[]>
  {
    return of(categories);
  }

  getProductsMen(id: number): Observable<Product[]>
  {
    this.productsMen.length = 0;
    for(var product of products){
      if(product.category_id === id){
        this.productsMen.push(product);
      }
    }
      return of(this.productsMen);
  }

  getProductsWomen(id: number): Observable<Product[]>
  {
    this.productsWomen.length = 0;
    for(var product of products){
      if(product.category_id === id){
        this.productsWomen.push(product);
      }
    }
      return of(this.productsWomen);
  }

  getProductsKid(id: number): Observable<Product[]>
  {
    this.productsKid.length = 0;
    for(var product of products){
      if(product.category_id === id){
        this.productsKid.push(product);
      }
    }
      return of(this.productsKid);
  }

  addProduct(product: Product): Observable<Product>{
      products.push(product);
      return;
  }

  deleteProduct(product: Product | number): Observable<Product>{
    const id = typeof product === 'number' ? product: product.id;
    return;
    // deleteHero (hero: Hero | number): Observable<Hero> {
    //   const id = typeof hero === 'number' ? hero : hero.id;
    //   const url = `${this.heroesUrl}/${id}`;
    //   return this.http.delete<Hero>(url, this.httpOptions).pipe(
    //     tap(_ => this.log(`deleted hero id=${id}`)),
    //     catchError(this.handleError<Hero>('deleteHero'))
    //   );
    // }
  }


}
