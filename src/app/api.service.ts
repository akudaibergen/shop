import { Order } from './../models';
import { products } from './products';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Prodaction, Company, LoginResponse, UserId } from 'src/models';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getProductsList(): Observable<Prodaction[]>{
    return this.http.get<Prodaction[]>("http://127.0.0.1:8000/api/products/");
  }

  getCompaniesList(): Observable<Company[]>{
    return this.http.get<Company[]>("http://127.0.0.1:8000/api/companies/");
  }

  getProductItem(id):Observable<Prodaction>{
    return this.http.get<Prodaction>(`http://127.0.0.1:8000/api/products/${id}/`);
  }
  getProductsWomen():Observable<Prodaction[]>{
    return this.http.get<Prodaction[]>("http://127.0.0.1:8000/api/products/women/");
  }
  getProductsKids():Observable<Prodaction[]>{
    return this.http.get<Prodaction[]>("http://127.0.0.1:8000/api/products/kids/");
  }
  getProductsMen():Observable<Prodaction[]>{
    return this.http.get<Prodaction[]>("http://127.0.0.1:8000/api/products/men/");
  }
  registerNewUser(username,password):Observable<any>{
    return this.http.post<any>("http://127.0.0.1:8000/api/users/",{username,password});
  }
  loginUser(username,password):Observable<LoginResponse>{
    return this.http.post<LoginResponse>("http://127.0.0.1:8000/api/auth/",{username,password});
  }
  getUserId(username):Observable<UserId>{
    return this.http.get<UserId>(`http://127.0.0.1:8000/api/users/${username}/`);
  }
  deleteProduct(id):Observable<Prodaction>{
    return this.http.delete<Prodaction>(`http://127.0.0.1:8000/api/products/${id}/`);
  }
  saveProductChange(product: Prodaction, id):Observable<Prodaction>{
    return this.http.put<Prodaction>(`http://127.0.0.1:8000/api/products/${id}/`, product);
  }
  createOrder(owner: number, products: Array<number>):Observable<Order>{
    return this.http.post<Order>("http://127.0.0.1:8000/api/orders/",{owner,products});
  }

}
