
import { Component, OnInit } from '@angular/core';
import {StockOrder} from "src/app/model/stock.model";
import { Stock } from  'src/app/model/api.response';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ApiResponse } from 'src/app/model/api.response';
import { StockServiceService } from 'src/app/service/stock-service.service';
import { Transaction } from 'src/app/model/transaction.model';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {

  constructor(private stockService:StockServiceService, private router: Router) { }
  myOrders: Transaction[] = [];

  ngOnInit(): void {
   
    this.stockService.getTransactions().subscribe((myOrders) => (this.myOrders = myOrders));
  }

}

 