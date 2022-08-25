
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StockOrder,Stock } from 'src/app/model/stock.model';
import { ComponentFixture, fakeAsync, flushMicrotasks, TestBed, tick} from '@angular/core/testing';
import { PortfolioComponent } from '../portfolio/portfolio.component'
import { StockServiceService } from 'src/app/service/stock-service.service';
import { of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { Dialog } from '@angular/cdk/dialog';
import { formatDate } from '@angular/common';
import { PopupbuyComponent } from '../popupbuy/popupbuy.component';
import { PopUpComponent } from '../pop-up/pop-up.component';

import * as masterList from 'src/app/model/stocks.list';




@Component({
  selector: 'app-create-stock-order',
  templateUrl: './create-stock-order.component.html',
  styleUrls: ['./create-stock-order.component.css']
})
export class CreateStockOrderComponent implements OnInit {

  stockOrder: StockOrder = new StockOrder();
  action = 'null';
  submitted = false;
  currentPrice: any;
  stock: Stock= new Stock();
  stocksList  = masterList.stocksList;
  
  
  
 
  constructor(private stockService:StockServiceService, private router: Router, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onSelected(value:string): void {
		this.action = value;
	}
  onSubmit(){
    

    const currentDate = new Date();
    
    this.submitted = true;
    this.stockOrder.action = this.action; 
    this.stock.stockTicker = this.stockOrder.stockTicker

    for(var i = 0; i < this.stocksList.length; i++) {
      if(this.stock.stockTicker == this.stocksList[i].symbol) {
        this.stock.companyName = this.stocksList[i].name;
      }
    }
    
    this.stock.action = this.stockOrder.action
    this.stock.quantity = this.stockOrder.quantity
    this.stock.date = formatDate(currentDate, 'yyyy-MM-dd', 'en-US');
    
    if(this.stock.action == 'BUY')
    {
     this.dialog.open(PopupbuyComponent, { data: this.stock });
    }
    if(this.stock.action == 'SELL')
    {
     this.dialog.open(PopUpComponent, { data: this.stock });
    }
    
  }

  getPrice() {
  
  
    this.stockService.getTicker().subscribe((data)=>{
      console.log("method called");
      console.log(data);
      });
      console.log("method ended");
    this.stockService.getPrice(this.stockOrder.stockTicker).subscribe((data)=>{
      this.currentPrice = data;
      this.stockOrder.price = this.currentPrice.price_data[0].value;
      console.log(data);
      });
  }

//   fetchSeries(value: String){
//     if(value === '') {
//       return this.searchResult = [];
//     }
//     this.searchResult = this.seriesList.filter(function(series) {
//       return series.name.toLowerCase().startsWith(value.toLowerCase())
//     })
//     return this.searchResult
// }
  

}
