import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AdminComponent } from './back-end/admin/admin.component';
import { DashboardComponent } from './back-end/dashboard/dashboard.component';
import { HomeComponent } from './front-end/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { ShopComponent } from './front-end/shop/shop.component';
import { IndexComponent } from './front-end/index/index.component';
import { AboutComponent } from './front-end/about/about.component';
import { ServiceComponent } from './front-end/service/service.component';
import { ContactComponent } from './front-end/contact/contact.component';
import { NotFoundComponent } from './front-end/not-found/not-found.component';
import { ProductDetailComponent } from './front-end/product-detail/product-detail.component';
import { ProductsComponent } from './front-end/products/products.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule],
  declarations: [ AppComponent, HelloComponent, AdminComponent, HomeComponent, DashboardComponent, ShopComponent, IndexComponent, AboutComponent, ServiceComponent, ContactComponent, NotFoundComponent, ProductDetailComponent, ProductsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
