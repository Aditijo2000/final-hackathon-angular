import { Component, OnInit } from '@angular/core';
import {StockOrder} from "src/app/model/stock.model";
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ApiResponse, Stock } from 'src/app/model/api.response';
import { StockServiceService } from 'src/app/service/stock-service.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  
  //portfolioEntries: Observable<ApiResponse>;
  

 

  constructor(private stockService:StockServiceService, private router: Router) { }
  //myShares : any;
  myPortfolio: Stock[] = []
 
  ngOnInit(): void {
   
    
     this.stockService.getStocks().subscribe((myPortfolio) => (this.myPortfolio = myPortfolio));

    //this.myShares= [{"name":"A","price":5,"ticker":"avb","date":"a4fda","quantity":5},{"name":"A","price":5,"ticker":"avb","date":"a4fda","quantity":5}]

  
     
 }


}
