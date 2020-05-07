import { Component, OnInit, Input } from '@angular/core';
import {Product} from "../../Product";
import { ProductService } from "../../product.service";
import { ActivatedRoute } from "@angular/router";
import { User } from '../../User';
import { Cart } from '../../Cart';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.css']
})
export class ShopListComponent implements OnInit {

  items:Product[];
  user: User[];
  cart = new Cart();
  search:string;

  constructor(
    private productService:ProductService,
    private route: ActivatedRoute,
    private home: HomeComponent
  ) { }

  ngOnInit():void {
    this.getProducts();
    this.getSearch();
  }
  getSearch(){
    if(this.search != null && this.search != ""){
    this.items = this.items.filter(product => product.name == this.search);
    } else if(this.search == null || this.search == "") {
      this.productService.getProducts().subscribe(response => this.items = response, error => console.log(error));
    }
  }
  

  getProducts(){
    this.route.params.subscribe(param => {
      if(param.category != null){
        this.productService.getProducts().subscribe(response => this.items = response.filter(product => product.category == param.category), error => console.log(error));
      } else{
        this.productService.getProducts().subscribe(response => this.items = response, error => console.log(error));
      };
    });
}
    check:boolean = true;
  addtoCart(product){
    for(let i = 0; i < this.home.items.length; i++){
        if(product.id == this.home.items[i].idsp){
          this.home.items[i].amount++;
          this.check = false;
        }
      }
      this.home.updateCarts();
      this.home.getTotal();
    if(this.check == true){
    this.cart.user = "Tan";
    this.cart.img = product.img;
    this.cart.name = product.name;
    this.cart.amount = 1;
    this.cart.idsp = product.id;
    this.cart.price = product.price;
    if(this.cart.user != null && this.cart.user != "null"){
      this.productService.addCart(this.cart).subscribe(response => (this.home.items.push(response), this.home.getTotal()), error => console.log(error));
    }
    }
}

}