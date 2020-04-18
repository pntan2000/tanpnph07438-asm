import { Component, OnInit } from '@angular/core';
import {Product} from "../../Product";
import { ProductService } from "../../product.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.css']
})
export class ShopListComponent implements OnInit {

  items:Product[];

  constructor(
    private productService:ProductService,
    private route: ActivatedRoute
  ) { }

  ngOnInit():void {
    this.getProducts();
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

}