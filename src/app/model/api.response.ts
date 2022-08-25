export class ApiResponse{
    status!: number;
    message!: number;
    result: any;
}

export interface Stock {
    //id: number,
    stockTicker: string,
    companyName: string,
    avgPrice: number,
    quantity: number
    action: string,
    date: string
}
