import { Component, OnInit } from '@angular/core';
import { Product } from "../../Product";
import { ProductService } from "../../product.service";
import { ActivatedRoute } from "@angular/router";
import { Cart } from "../../Cart";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product;
  cart = new Cart();
  amount:number;
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getProduct();
  }
  getProduct(){
    this.route.params.subscribe(param => {
      this.productService.getProductDetail(param.id).subscribe(response => this.product = response, error => console.log(error))
    });
  }

  addCart(){
    this.cart.user = "Tan";
    this.cart.img = this.product.img;
    this.cart.name = this.product.name;
    this.cart.amount = this.amount;
    if(this.cart.user != null && this.cart.user != "null"){
      this.productService.addCart(this.cart).subscribe(response => console.log(response), error => console.log(error));
    }
    
  }

}