import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './front-end/home/home.component';
import { AdminComponent } from './back-end/admin/admin.component';
import { DashboardComponent } from './back-end/dashboard/dashboard.component';
import { IndexComponent } from './front-end/index/index.component';
import { ShopComponent } from './front-end/shop/shop.component';

const routes: Routes = [
  { path: '', redirectTo:'home', pathMatch:'full'},
  { path: 'home', component: HomeComponent,
    children: [
      { path: '', component: IndexComponent}
    ]
  },
  { path: 'shop', component: ShopComponent},
  { path: 'admin', component: AdminComponent,
    children: [
      { path: '', redirectTo:'dashboard', pathMatch:'full'},
      { path: 'dashboard', component: DashboardComponent}
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }