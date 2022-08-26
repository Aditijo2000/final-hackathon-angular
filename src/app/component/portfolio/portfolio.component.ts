import { Component, OnInit } from '@angular/core';
import {StockOrder} from "src/app/model/stock.model";
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ApiResponse, Stock } from 'src/app/model/api.response';
import { StockServiceService } from 'src/app/service/stock-service.service';
import { FormControl, FormGroup } from '@angular/forms';

import { MatDialog } from '@angular/material/dialog';
import { PopUpComponent } from '../pop-up/pop-up.component';
import { formatDate } from '@angular/common';
import { PopupbuyComponent } from '../popupbuy/popupbuy.component';
import { toFloat } from 'src/app/util/price';
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  
  //portfolioEntries: Observable<ApiResponse>;
  

 

  constructor(private stockService:StockServiceService, private router: Router, public dialog: MatDialog) { 
   
  }
  //myShares : any;
  myPortfolio: Stock[] = []
  stockOrder : StockOrder=new StockOrder();  
  isSold = false;
  toFloat =  toFloat;
  ngOnInit(): void {
   
    
     this.stockService.getStocks().subscribe((myPortfolio) => (this.myPortfolio = myPortfolio));

    // this.myPortfolio = [
    //   { "id" : 1,"companyName": "CITI","avgPrice": 33,  "stockTicker": "citi", "quantity": 5 }
    // ]
  
    
}

 sellStock(stock: Stock){

  console.log(stock);
  stock.action = "SELL";
  const currentDate = new Date();

  stock.date = formatDate(currentDate, 'yyyy-MM-dd', 'en-US');
  this.dialog.open(PopUpComponent, { data: stock});
}


buyStock(stock: Stock){

  console.log(stock);
  stock.action = "BUY";
  const currentDate = new Date();

  stock.date = formatDate(currentDate, 'yyyy-MM-dd', 'en-US');
  this.dialog.open(PopupbuyComponent, { data: stock});
}
changeisUpdate(){  
  this.isSold=false;  
} 


}


 


