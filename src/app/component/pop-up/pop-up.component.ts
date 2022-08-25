import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StockOrder } from 'src/app/model/stock.model';


@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent implements OnInit {

  stockOrder: StockOrder = new StockOrder();
  availableStock!: number;
  submitted = false;
  constructor(@Inject(MAT_DIALOG_DATA) public data : any) { 
    this.stockOrder.stockTicker = data.stockTicker;
    this.stockOrder.quantity = data.quantity;
    this.stockOrder.companyName = data.companyName;
    this.availableStock = data.quantity;
    
  }

  ngOnInit(): void {
  }

  onSubmit(){

  }
}
