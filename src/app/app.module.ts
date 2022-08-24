import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CreateStockOrderComponent } from './component/create-stock-order/create-stock-order.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { StockServiceService } from './service/stock-service.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PortfolioComponent } from './component/portfolio/portfolio.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { TransactionsComponent } from './component/transactions/transactions.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateStockOrderComponent,
    NavbarComponent,
    PortfolioComponent,
    PortfolioComponent,
    TransactionsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [StockServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
