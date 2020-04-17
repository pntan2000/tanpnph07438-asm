import { Injectable } from '@angular/core';
import { Product } from './Product';
import { Order } from './Order';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from './User';

@Injectable()
export class ProductService {

  api = 'https://5e7b1a7f0e04630016332aa8.mockapi.io';
  products: Product[];
  users: Observable<User[]>;
  constructor(
    private http: HttpClient
  ) { }
  getProducts(): Observable<Product[]>{
      return this.http.get<Product[]>(`${this.api}/Product`);
  }
  getOrders(): Observable<Order[]>{
      return this.http.get<Order[]>(`${this.api}/Order`);
  }

  getProductDetail(id): Observable<Product>{
    return this.http.get<Product>(`${this.api}/Product/${id}`);
  }
  getUser(): Observable<User[]>{
    this.users = this.http.get<User[]>(`${this.api}/User`);
    return this.http.get<User[]>(`${this.api}/User`);
  }
  login(user){
    
  }
  removeProduct(id){
    return this.products = this.products.filter(product => product.id != id);
  }

  addProduct(product){
    this.products.push(product);
  }

}