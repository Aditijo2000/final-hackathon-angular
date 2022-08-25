import { Component, Inject, OnInit, ɵɵqueryRefresh } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { StockOrder } from 'src/app/model/stock.model';
import { StockServiceService } from 'src/app/service/stock-service.service';

@Component({
  selector: 'app-popupbuy',
  templateUrl: './popupbuy.component.html',
  styleUrls: ['./popupbuy.component.css']
})
export class PopupbuyComponent implements OnInit {

  stockOrder: StockOrder = new StockOrder();
  availableStock!: number;
  submitted = false;
  currentPrice: any;
  constructor(@Inject(MAT_DIALOG_DATA) public data : any,private stockService:StockServiceService, private router: Router) { 
    this.stockOrder.stockTicker = data.stockTicker;
    this.stockOrder.quantity = data.quantity;
    this.stockOrder.companyName = data.companyName;
    this.stockOrder.action = data.action;
    
    this.stockOrder.date = data.date;
    this.availableStock = data.quantity;
    this.stockService.getPrice(this.stockOrder.stockTicker).subscribe((data)=>{
      this.currentPrice = data;
      this.stockOrder.price = this.currentPrice.price_data[0].value;
      
      
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
