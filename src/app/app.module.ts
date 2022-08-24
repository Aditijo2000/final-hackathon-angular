import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CreateStockOrderComponent } from './component/create-stock-order/create-stock-order.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { StockServiceService } from './service/stock-service.service';
import { NavbarComponent } from './component/navbar/navbar.component';
import { PortfolioComponent } from './component/portfolio/portfolio.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateStockOrderComponent,
    NavbarComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [StockServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
