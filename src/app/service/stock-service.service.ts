import { Injectable } from '@angular/core';

import {Observable} from "rxjs/index";
import { ApiResponse, Stock } from '../model/api.response';
import { StockOrder} from '../model/stock.model';


import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Transaction } from '../model/transaction.model';
@Injectable({
  providedIn: 'root'
})
export class StockServiceService {
  private baseUrl = 'http://icgpune1-linux4.conygre.com:8081/'
  
  httpOptions = {
    headers: new HttpHeaders({'Content-Type':'application/json'})
  }
  constructor(private http: HttpClient) { }
  

 
  

  // getTransactions(): Observable<ApiResponse> {
  //   return this.http.get<ApiResponse>(this.baseUrl);
  // }

  getStockOrderById(id: number): Observable<any> {
    return this.http.get(this.baseUrl + id);
  }

  createStockOrder(stockOrder: StockOrder): Observable<ApiResponse> {
   console.log(stockOrder);
    return this.http.post<ApiResponse>(this.baseUrl, stockOrder);
  }

  getStocks() : Observable<Stock[]> {
    const url = this.baseUrl+'portfolio'
    return  this.http.get<Stock[]>(url);
  }

  getTransactions() : Observable<Transaction[]> {
    const url = this.baseUrl+'transactions'
    return  this.http.get<Transaction[]>(url);

  }

  getPrice(stockTicker : string){
    return this.http.get('https://3p7zu95yg3.execute-api.us-east-1.amazonaws.com/default/priceFeed2?ticker='+stockTicker+'&num_days=1'); 
  
    }
}
