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

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule ],
  declarations: [ AppComponent, HelloComponent, AdminComponent, HomeComponent, DashboardComponent, ShopComponent, IndexComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
