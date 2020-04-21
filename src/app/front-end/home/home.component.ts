import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from "../../product.service";
import { Cart } from '../../Cart';
import { Order } from '../../Order';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  registerForm: FormGroup;
    submitted = false;
    items:Cart[];
    order = new Order;

    constructor(
      private formBuilder: FormBuilder,
      private productService:ProductService
    ) { }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.nullValidator]],
            password: ['', [Validators.required, Validators.nullValidator]]
        });
        this.getCart();
    }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }

    }

    getCart(){
      this.productService.getCart().subscribe(response => this.items = response.filter(product => product.user == "Tan"), error => console.log(error));
      console.log(this.items);
    }
    removeCart(id){
      this.productService.deleteCart(id).subscribe(response => this.items = this.items.filter(item => item.id != response.id), error => console.log(error));
    }
    changeCart(product, amo){
      for(let i = 0; i < this.items.length; i++){
        if(this.items[i].id == product.id){
          product.amount = amo;
          break;
        }
      }
    }

    updateCarts(){
      for(let i = 0; i < this.items.length; i++){
        this.productService.updateCart(this.items[i]).subscribe();
      }
    }

    BuyAll(){
      for(let i = 0; i < this.items.length; i++){
        this.order.name = this.items[i].name;
        this.order.img = this.items[i].img;
        this.order.price = this.items[i].price*this.items[i].amount;
        this.order.adress = this.items[i].user;
        this.order.amount = this.items[i].amount;
        this.order.status = "";
        let id = this.items[i].id;
        this.productService.addOrder(this.order).subscribe();
        this.productService.deleteCart(id).subscribe(response => this.items = this.items.filter(item => item.id != response.id), error => console.log(error));
      }
    }

}