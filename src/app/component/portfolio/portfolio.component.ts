import { Component, OnInit } from '@angular/core';
import {StockOrder} from "src/app/model/stock.model";
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ApiResponse } from 'src/app/model/api.response';
import { StockServiceService } from 'src/app/service/stock-service.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor(private stockService:StockServiceService, private router: Router) { }
  myShares: any;

  ngOnInit(): void {
     this.myShares= []
     
 }

}
