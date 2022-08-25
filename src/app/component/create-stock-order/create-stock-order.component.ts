import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StockOrder } from 'src/app/model/stock.model';
import { StockServiceService } from 'src/app/service/stock-service.service';


@Component({
  selector: 'app-create-stock-order',
  templateUrl: './create-stock-order.component.html',
  styleUrls: ['./create-stock-order.component.css']
})
export class CreateStockOrderComponent implements OnInit {

  stockOrder: StockOrder = new StockOrder();
  action = 'null';
  submitted = false;

  constructor(private stockService:StockServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  onSelected(value:string): void {
		this.action = value;
	}
  onSubmit(){

    const currentDate = new Date();
    this.submitted = true;
    this.stockOrder.date = formatDate(currentDate, 'yyyy-MM-dd', 'en-US');
    this.stockOrder.action = this.action;
    this.stockOrder.companyName = "";
    this.stockOrder.statusCode =0;
    this.stockService.createStockOrder(this.stockOrder)
    .subscribe(data => console.log(data), error => console.log(error));
   
    console.log(this.stockOrder)
    this.stockOrder = new StockOrder();
    //this.router.navigate(['/stockOrder']);
  }
  

}
