import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }  from '@angular/common/http'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

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
import { ProductsComponent } from './back-end/products/products.component';
import { PricingTableComponent } from './back-end/pricing-table/pricing-table.component';
import { PeopleCardsComponent } from './back-end/people-cards/people-cards.component';
import { ProductService } from './product.service';
import { OrdersComponent } from './back-end/orders/orders.component';
import { ShopListComponent } from './front-end/shop-list/shop-list.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule, HttpClientModule, NgbModule ],
  declarations: [ AppComponent, HelloComponent, AdminComponent, HomeComponent, DashboardComponent, ShopComponent, IndexComponent, AboutComponent, ServiceComponent, ContactComponent, NotFoundComponent, ProductDetailComponent, ProductsComponent, PricingTableComponent, PeopleCardsComponent,  OrdersComponent, ShopListComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ProductService]
})
export class AppModule { }
