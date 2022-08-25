export class StockOrder {
    
    companyName!: string;
    price!: number;
    stockTicker!: string;
    quantity!: number;
    action!: string;
    status!: number;
    date!: string
    
}
export class Stock {
   
    stockTicker!: string;
    companyName!: string;
    avgPrice!: number;
    quantity!: number;
    action!: string;
    date!: string;
}

