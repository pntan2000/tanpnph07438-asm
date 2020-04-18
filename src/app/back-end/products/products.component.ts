import { Component, OnInit } from '@angular/core';
import {Product} from "../../Product";
import { ProductService } from "../../product.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  items:Product[];
  selected: Product;
  product = new Product();
  products = new Product();
  constructor(
    private productService:ProductService,
    private route: ActivatedRoute
  ) { }

  ngOnInit():void {
    this.getProducts();
  }
  productDetail(product){
   this.selected = product;
  }

  getProducts(){
    this.route.params.subscribe(param => {
      console.log(param.category);
      if(param.category != null){
        this.productService.getProducts().subscribe(response => this.items = response.filter(product => product.category == param.category), error => console.log(error));
      } else{
        this.productService.getProducts().subscribe(response => this.items = response, error => console.log(error));
      };
    });
}
  removeItem(id){
    this.productService.deleteProduct(id).subscribe(response => this.items = response, error => console.log(error));
    this.ngOnInit();
  }
  addItem(){
    this.productService.addProduct(this.product).subscribe(response => this.items = response, error => console.log(error));
    this.ngOnInit();
  }
  updateItem(){
    this.products.id = this.selected.id;
    this.productService.updateProduct(this.products).subscribe(response => this.items = response, error => console.log(error));
    this.ngOnInit();
  }
}