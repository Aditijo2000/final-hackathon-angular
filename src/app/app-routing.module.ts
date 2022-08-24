import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateStockOrderComponent } from './component/create-stock-order/create-stock-order.component';
import { PortfolioComponent } from './component/portfolio/portfolio.component';
const routes: Routes = [
    { path: '', redirectTo: 'stockOrder', pathMatch: 'full' },
    { path: 'add', component: CreateStockOrderComponent },
    { path: 'portfolio', component: PortfolioComponent },
    

    
  ];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }