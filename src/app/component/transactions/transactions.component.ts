import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {

  constructor() { }
  myOrders: any;

  ngOnInit(): void {
    this.myOrders = [
      { "name": "CITI", "price": 5, "ticker": "citi", "quantity": 5,"action":0, "status": '0', "date": "28-06-2022" },
      { "name": "Microsoft", "price": 15, "ticker": "msft","action":1,"quantity": 15, "status": '0', "date": "21-06-2022" }
    ]



  }

}
