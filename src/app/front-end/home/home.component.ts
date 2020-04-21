import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from "../../product.service";
import { Cart } from '../../Cart';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  registerForm: FormGroup;
    submitted = false;
    items:Cart[]

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
      this.productService.getCart().subscribe(response => this.items = response, error => console.log(error));
    }
    removeCart(id){
      this.productService.deleteCart(id).subscribe(response => this.items = this.items.filter(item => item.id != response.id), error => console.log(error));
    }

}