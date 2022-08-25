import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StockOrder } from 'src/app/model/stock.model';

@Component({
  selector: 'app-popupbuy',
  templateUrl: './popupbuy.component.html',
  styleUrls: ['./popupbuy.component.css']
})
export class PopupbuyComponent implements OnInit {

  stockOrder: StockOrder = new StockOrder();
  availableStock!: number;
  submitted = false;
  constructor(@Inject(MAT_DIALOG_DATA) public data : any) { 
    this.stockOrder.stockTicker = data.stockTicker;
    this.stockOrder.quantity = data.quantity;
    this.stockOrder.companyName = data.companyName;
    this.stockOrder.action = data.action;
    
    this.stockOrder.date = data.data;
    this.availableStock = data.quantity;
    
  }

  ngOnInit(): void {
  }


  onSubmit(){

  }
}
