import { Injectable } from "@angular/core";
import { Product } from "./Product";
import { Order } from "./Order";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from "./User";
import { Cart } from "./Cart";

@Injectable()
export class ProductService {
  api = "https://5e7b1a7f0e04630016332aa8.mockapi.io";
  products: Product[];
  users: Observable<User[]>;
  constructor(private http: HttpClient) {}
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.api}/Product`);
  }
  addProduct(product): Observable<Product> {
    return this.http.post<Product>(`${this.api}/Product`, product);
  }
  updateProduct(product): Observable<Product> {
    return this.http.put<Product>(`${this.api}/Product/${product.id}`, product);
  }
  getProductDetail(id): Observable<Product> {
    return this.http.get<Product>(`${this.api}/Product/${id}`);
  }
  deleteProduct(id): Observable<Product> {
    return this.http.delete<Product>(`${this.api}/Product/${id}`);
  }

  getUser(): Observable<User[]> {
    this.users = this.http.get<User[]>(`${this.api}/User`);
    return this.http.get<User[]>(`${this.api}/User`);
  }

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.api}/Order`);
  }
  addOrder(product): Observable<Order> {
    return this.http.post<Order>(`${this.api}/Order`, product);
  }
  updateOrder(order): Observable<Order> {
    return this.http.put<Order>(`${this.api}/Order/${order.id}`, order);
  }

  getCart(): Observable<Cart[]> {
    return this.http.get<Cart[]>(`${this.api}/Cart`);
  }
  addCart(product): Observable<Cart> {
    return this.http.post<Cart>(`${this.api}/Cart`, product);
  }
  updateCart(product): Observable<Cart> {
    return this.http.put<Cart>(`${this.api}/Cart/${product.id}`, product);
  }
  deleteCart(id): Observable<Cart> {
    return this.http.delete<Cart>(`${this.api}/Cart/${id}`);
  }
}
