import { Component, OnInit } from '@angular/core';
import {Order} from "../../Order";
import { ProductService } from "../../product.service";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  items:Order[];
  page = 1;
  pageSize = 10;
  constructor(
     private productService:ProductService
  ) { }

  ngOnInit():void {
    this.getOrders();
  }

getOrders(){
    this.productService.getOrders().subscribe(response => this.items = response, error => console.log(error));
}

}