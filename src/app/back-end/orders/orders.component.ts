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
      this.productService.getOrders().subscribe(response => this.items = response.sort((n1,n2) => {
      if (n1.status > n2.status) {
          return 1;
      }

      if (n1.status < n2.status) {
          return -1;
      }

      return 0;
  }), error => console.log(error));
  }

  success(order){
    this.items = this.items.filter(product => product.id != order.id);
    order.status = "none";
    this.productService.updateOrder(order).subscribe(response => this.items.push(response), error => console.log(error));
  }

}