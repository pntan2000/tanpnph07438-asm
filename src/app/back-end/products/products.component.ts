import { Component, OnInit } from '@angular/core';
import {Product} from "../../Product";
import { ProductService } from "../../product.service";
import { ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  page=1;
  pageSize=10;

  items:Product[];
  selected= new Product;
  product = new Product();
  products = new Product();
  search: string;

  validateForm: FormGroup;
    submitted = false;
    message: string;

  constructor(
    private productService:ProductService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit():void {
    this.getProducts();

     this.validateForm = this.formBuilder.group({
            name: ['', Validators.required],
            price: ['', Validators.required],
            category: ['', Validators.required],
            amount: ['', Validators.required],
            img: ['', Validators.required]
        });
  }
  get f() { return this.validateForm.controls; }

    onSubmit() {
        this.submitted = true;
        if (this.validateForm.invalid) {
            return;
        }
        this.addItem();
        this.message = "Add Success";
    }
    onReset() {
        this.submitted = false;
        this.validateForm.reset();
        this.message = null;
    }

  productDetail(product){
   this.selected = product;
  }

  getProducts(){
    this.route.params.subscribe(param => {
      if(param.category != null && param.category != "all"){
        this.productService.getProducts().subscribe(response => this.items = response.filter(product => product.category == param.category), error => console.log(error));
      } else if(param.category == "all"){
        this.productService.getProducts().subscribe(response => this.items = response, error => console.log(error));
      };
    });
}
  removeItem(id){
    this.productService.deleteProduct(id).subscribe(response => this.items = this.items.filter(product => product.id != response.id), error => console.log(error));
  }
  addItem(){
    this.productService.addProduct(this.product).subscribe(response => this.items.push(response), error => console.log(error));
  }
  updateItem(){
    this.products.id = this.selected.id;
    this.items = this.items.filter(product => product.id != this.products.id);
    this.productService.updateProduct(this.products).subscribe(response => this.items.push(response), error => console.log(error));
    this.items = this.items.sort((n1,n2) => {
    if (n1.id > n2.id) {
        return 1;
    }

    if (n1.id < n2.id) {
        return -1;
    }

    return 0;
});
      console.log(this.items);
  }

  getSearch(){
    if(this.search != null && this.search != ""){
    this.items = this.items.filter(product => product.name == this.search);
    } else if(this.search == null || this.search == "") {
      this.productService.getProducts().subscribe(response => this.items = response, error => console.log(error));
    }
  }
}