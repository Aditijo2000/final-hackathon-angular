import { formatDate } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { StockOrder } from 'src/app/model/stock.model';
import { StockServiceService } from 'src/app/service/stock-service.service';
import { toFloat } from 'src/app/util/price';
import { lookup, searchTicker } from 'stock-ticker-symbol';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

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
  toFloat = toFloat;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private stockService: StockServiceService, private toastr: ToastrService, private router: Router, private dialogref: MatDialogRef<PopUpComponent>) {
    this.stockOrder.stockTicker = data.stockTicker;
    this.stockOrder.quantity = data.quantity;
    try {
      this.stockOrder.companyName = data.companyName || lookup(data.stockTicker);
    }
    catch (e) {
      this.error = true;
    }
    this.stockOrder.action = data.action;
    this.stockOrder.date = data.date;
    this.availableStock = data.quantity;
    this.stockService.getPrice(this.stockOrder.stockTicker).subscribe((data) => {
      this.currentPrice = data;
      this.stockOrder.price = this.currentPrice.price_data[0].value;
    }, (err: HttpErrorResponse) => {
      this.error = true;
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {

    this.stockService.createStockOrder(this.stockOrder)
      .subscribe((data) => {
        console.log(data.message);
        this.toastr.info(data.message.toString());
      }, (error) => {
        console.log(error);
        this.toastr.error("Failed");
      });
    this.dialogref.close()
    setTimeout(() => { this.router.navigateByUrl('/portfolio');
       location.reload();},2000);
      // this.router.navigateByUrl('/portfolio');
      // location.reload();
    }
}
