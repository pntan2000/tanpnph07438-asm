import { Component, OnInit } from '@angular/core';
import {Product} from "../../Product";
import { ProductService } from "../../product.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  items:Product[];
  page = 1;
  pageSize = 10;
  constructor(
    private productService:ProductService
  ) { }

  ngOnInit():void {
    this.getProducts();
  }

  getProducts(){
    console.log(1);
    this.productService.getProducts().subscribe(response => this.items = response, error => console.log(error));
}
}