import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsComponent } from './transactions.component';
import { StockServiceService } from 'src/app/service/stock-service.service';
import { of } from 'rxjs';

describe('TransactionsComponent', () => {
  let component: TransactionsComponent;
  let fixture: ComponentFixture<TransactionsComponent>;

  let transactionsServiceStub = {
    getTransactions: () =>
      of([
        { "companyName": "CITI", "price": 5, "stockTicker": "citi", "quantity": 5, "action": 0, "status": 0, "date": "28-06-2022" },
        { "companyName": "Microsoft", "price": 15, "stockTicker": "msft", "action": 1, "quantity": 15, "status": 0, "date": "21-06-2022" }
      ]),
  };
  

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TransactionsComponent],
      providers: [{ provide: StockServiceService, useValue: transactionsServiceStub }],
    })
      .compileComponents();

    fixture = TestBed.createComponent(TransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a table of transactions', () => {
    // it should have a table of transactions
    expect(fixture.nativeElement.querySelector('table')).toBeTruthy();

    // it should have 2 transaction in the table
    expect(fixture.nativeElement.querySelectorAll('table tr').length).toBe(3);

    // the title of the first transaction should be 'CITI'
    expect(
      fixture.nativeElement.querySelectorAll('table td')?.item(1).textContent
    ).toBe('CITI');
  });
});


describe('TransactionsComponent with no transactions', () => {
  let component: TransactionsComponent;
  let fixture: ComponentFixture<TransactionsComponent>;

  let transactionsServiceStub = {
    getTransactions: () =>
      of([
      ]),
  };
  

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TransactionsComponent],
      providers: [{ provide: StockServiceService, useValue: transactionsServiceStub }],
    })
      .compileComponents();

    fixture = TestBed.createComponent(TransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not render a table of transactions', () => {
    expect(fixture.nativeElement.querySelector('table')).toBeFalsy();
  });
});