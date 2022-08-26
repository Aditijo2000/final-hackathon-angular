import { Component, Inject, OnInit, ɵɵqueryRefresh } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { StockOrder } from 'src/app/model/stock.model';
import { StockServiceService } from 'src/app/service/stock-service.service';
import { toFloat } from 'src/app/util/price';
import { lookup } from 'stock-ticker-symbol';
import { ToastrService } from 'ngx-toastr';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-popupbuy',
  templateUrl: './popupbuy.component.html',
  styleUrls: ['./popupbuy.component.css']
})
export class PopupbuyComponent implements OnInit {

  stockOrder: StockOrder = new StockOrder();
  availableStock!: number;
  submitted = false;
  currentPrice: any = null;
  error = false;
  toFloat = toFloat;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private stockService: StockServiceService, private router: Router, private toastr: ToastrService, private dialogref: MatDialogRef<PopupbuyComponent>) {
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
