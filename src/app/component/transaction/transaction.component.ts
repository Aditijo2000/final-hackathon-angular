import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StockServiceService } from 'src/app/service/stock-service.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  constructor(private stockService:StockServiceService, private router: Router) { }

  myShares: any;

  ngOnInit(): void {
    this.myShares= [{"name":"A","price":5,"ticker":"avb","date":"a4fda","quantity":5},{"name":"A","price":5,"ticker":"avb","date":"a4fda","quantity":5}]

     
     

 }

}
