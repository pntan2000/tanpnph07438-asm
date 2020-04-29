import { Component, OnInit } from '@angular/core';
import { Product } from "../../Product";
import { ProductService } from "../../product.service";
import { ActivatedRoute } from "@angular/router";
import { Cart } from "../../Cart";
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product;
  cart = new Cart();
  amount: number = 1;
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private home: HomeComponent
  ) { }

  ngOnInit() {
    this.getProduct();
  }
  getProduct(){
    this.route.params.subscribe(param => {
      this.productService.getProductDetail(param.id).subscribe(response => this.product = response, error => console.log(error))
    });
  }

    check:boolean = true;
  addCart(){
    for(let i = 0; i < this.home.items.length; i++){
        if(this.product.id == this.home.items[i].idsp){
          this.home.items[i].amount+=this.amount;
          this.check = false;
          console.log(this.home.items[i]);
        }
      }
      this.home.updateCarts();
    if(this.check == true){
      this.cart.user = "Tan";
      this.cart.img = this.product.img;
      this.cart.name = this.product.name;
      this.cart.amount = this.amount;
      this.cart.idsp = this.product.id;
      this.cart.price = this.product.price;
      if(this.cart.user != null && this.cart.user != "null"){
        this.productService.addCart(this.cart).subscribe(response => this.home.items.push(response), error => console.log(error));
      }
    }
  }
}