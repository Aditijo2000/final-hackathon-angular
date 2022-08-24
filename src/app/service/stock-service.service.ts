import { Injectable } from '@angular/core';

import {Observable} from "rxjs/index";
import { ApiResponse, Stock } from '../model/api.response';
import { StockOrder} from '../model/stock.model';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class StockServiceService {
  private baseUrl = 'http://localhost:5000/'
  httpOptions = {
    headers: new HttpHeaders({'Content-Type':'application/json'})
  }
  constructor(private http: HttpClient) { }
  

  

  getEmployees() : Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl);
  }

  getStockOrderById(id: number): Observable<any> {
    return this.http.get(this.baseUrl + id);
  }

  createStockOrder(stockOrder: StockOrder): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl, stockOrder);
  }

  getStocks() : Observable<Stock[]> {
    const url = 'http://localhost:5000/portfolio/'
    return  this.http.get<Stock[]>(url);
  }
}
