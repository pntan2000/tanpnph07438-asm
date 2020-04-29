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
  item: Cart[];
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private home: HomeComponent
  ) { }

  ngOnInit() {
    this.getProduct();
    this.productService.getCart().subscribe(response => this.item = response.filter(product => product.user == "Tan"), error => console.log(error));
  }
  getProduct(){
    this.route.params.subscribe(param => {
      this.productService.getProductDetail(param.id).subscribe(response => this.product = response, error => console.log(error))
    });
  }

    check:boolean = true;
  addCart(){
    for(let i = 0; i < this.item.length; i++){
      let amou = this.item[i].amount;
        if(this.product.id == this.item[i].idsp){
          console.log(this.item[i]);
          this.item[i].amount = amou + this.amount;
          this.check = false;
          this.productService.updateCart(this.item[i]).subscribe();
        }
      }
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