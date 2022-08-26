import { formatDate } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { StockOrder } from 'src/app/model/stock.model';
import { StockServiceService } from 'src/app/service/stock-service.service';
import { toFloat } from 'src/app/util/price';
import { lookup, searchTicker } from 'stock-ticker-symbol';
@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent implements OnInit {

  stockOrder: StockOrder = new StockOrder();
  availableStock!: number;
  submitted = false;
  currentPrice: any;
  error = false;
  toFloat= toFloat;
  constructor(@Inject(MAT_DIALOG_DATA) public data : any, private stockService:StockServiceService, private router: Router) { 
    this.stockOrder.stockTicker = data.stockTicker;
    this.stockOrder.quantity = data.quantity;
    console.log(lookup(data.stockTicker));
    this.stockOrder.companyName = data.companyName || lookup(data.stockTicker);
    this.stockOrder.action = data.action;
    this.stockOrder.date = data.date;
    this.availableStock = data.quantity;
    this.stockService.getPrice(this.stockOrder.stockTicker).subscribe((data)=>{
      this.currentPrice = data;
      this.stockOrder.price = this.currentPrice.price_data[0].value;
      }, (err:HttpErrorResponse) => {
        this.error= true; 
      });
  }

  ngOnInit(): void {
  }

  onSubmit(){
    
    
      
    this.stockService.createStockOrder(this.stockOrder)
    .subscribe(data => console.log(data), error => console.log(error));
    
    this.router.navigateByUrl('/portfolio');
    location.reload();
    
    

    
  
  }
}
