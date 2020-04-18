import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './front-end/home/home.component';
import { AdminComponent } from './back-end/admin/admin.component';
import { DashboardComponent } from './back-end/dashboard/dashboard.component';
import { IndexComponent } from './front-end/index/index.component';
import { ShopComponent } from './front-end/shop/shop.component';
import { NotFoundComponent } from './front-end/not-found/not-found.component';
import { AboutComponent } from './front-end/about/about.component';
import { ServiceComponent } from './front-end/service/service.component';
import { ContactComponent } from './front-end/contact/contact.component';
import { ProductDetailComponent } from './front-end/product-detail/product-detail.component';
import { ProductsComponent } from './back-end/products/products.component';
import { PeopleCardsComponent } from './back-end/people-cards/people-cards.component';
import { PricingTableComponent } from './back-end/pricing-table/pricing-table.component';
import { OrdersComponent } from './back-end/orders/orders.component';

const routes: Routes = [
  { path: '', redirectTo:'home', pathMatch:'full'},
  { path: 'home', component: HomeComponent,
    children: [
      { path: '', component: IndexComponent}
    ]
  },
  { path: 'shop', component: HomeComponent,
    children: [
      { path: '', component: ShopComponent},
      { path: ':category', component: ShopComponent}
    ]
    },
    
  { path: 'about', component: HomeComponent,
    children: [
      { path: '', component: AboutComponent}
    ]
    },
  { path: 'service', component: HomeComponent,
    children: [
      { path: '', component: ServiceComponent}
    ]
    },
    { path: 'product-detail/:id', component: HomeComponent,
    children: [
      { path: '', component: ProductDetailComponent}
    ]
    },
  { path: 'contact', component: HomeComponent,
    children: [
      { path: '', component: ContactComponent}
    ]
    },
  { path: 'admin', component: AdminComponent,
    children: [
      { path: '', redirectTo:'dashboard', pathMatch:'full'},
      { path: 'dashboard', component: DashboardComponent},
      { path: 'products', component: ProductsComponent,
          children: [
            { path: '', component: ProductsComponent},
            { path: ':category', component: ProductsComponent},
          ]},
      { path: 'people-cards', component: PeopleCardsComponent},
      { path: 'orders', component: OrdersComponent},
      { path: 'pricing-tables', component: PricingTableComponent},
    ]
  },
  { path: '404', component: HomeComponent,
    children: [
      { path: '', component: NotFoundComponent}
    ]},
  { path: '**', redirectTo:'/404', pathMatch:'full'},
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }