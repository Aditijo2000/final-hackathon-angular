import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs/index";

import { StockOrder} from '../model/stock.model';
import { ApiResponse, Stock } from '../model/api.response';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StockServiceService {

  
  constructor(private http: HttpClient) { }
  private baseUrl: string = environment.baseUrl +'/api/stockOrder/';

  
  getStocks() : Observable<Stock[]> {
    const url = 'http://localhost:5000/portfolio/'
    return  this.http.get<Stock[]>(url);
  }

  

  getTransactions(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl);
  }

  getStockOrderById(id: number): Observable<any> {
    return this.http.get(this.baseUrl + id);
  }

  createStockOrder(stockOrder: StockOrder): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl, stockOrder);
  }
}
