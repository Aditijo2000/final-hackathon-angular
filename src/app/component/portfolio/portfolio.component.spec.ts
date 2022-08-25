import { ComponentFixture, fakeAsync, flushMicrotasks, TestBed, tick} from '@angular/core/testing';

import { PortfolioComponent } from './portfolio.component';
import { StockServiceService } from 'src/app/service/stock-service.service';
import { of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { Dialog } from '@angular/cdk/dialog';

let matDialogService: jasmine.SpyObj<MatDialog>;
matDialogService = jasmine.createSpyObj<MatDialog>('MatDialog', ['open']);




describe('PortfolioComponent', () => {
  let component: PortfolioComponent;
  let fixture: ComponentFixture<PortfolioComponent>;

  let mysharesServiceStub = {
    getStocks: () =>
      of([
        { "id": 1, "companyName": "CITI", "avgPrice": 33, "stockTicker": "citi", "quantity": 50 },
        { "id": 10, "companyName": "Microsoft", "avgPrice": 25, "stockTicker": "msft", "quantity": 25 }
      ]),
  };


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PortfolioComponent],
      providers: [{ provide: MatDialog, useValue:{}}, { provide: StockServiceService, useValue: mysharesServiceStub }],
    })
      .compileComponents();

    fixture = TestBed.createComponent(PortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a table of shares', () => {
    // it should have a table of shares
    expect(fixture.nativeElement.querySelector('table')).toBeTruthy();

    // it should have 2 transaction in the table
    expect(fixture.nativeElement.querySelectorAll('table tr').length).toBe(3);

    // the title of the first transaction should be 'CITI'
    expect(
      fixture.nativeElement.querySelectorAll('table td')?.item(0).textContent
    ).toBe('CITI');

  });

  it('should have 2 buttons inside table', () => {
    expect(fixture.nativeElement.querySelectorAll('table button').length).toBe(2);
  });

  it('should load popup component when button is clicked', fakeAsync(() => {
    spyOn(component, 'sellStock')
    let button: HTMLButtonElement = fixture.nativeElement.querySelector('button');
    button.click();
    tick();
    expect(component.sellStock).toHaveBeenCalled();
    expect(fixture.nativeElement.querySelector('mat-dialog-container')).toBeTruthy;
  }));

});




describe('PortfolioComponent with no shares', () => {
  let component: PortfolioComponent;
  let fixture: ComponentFixture<PortfolioComponent>;

  let mysharesServiceStub = {
    getStocks: () =>
      of([
      ]),
  };


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PortfolioComponent],
      providers: [{ provide: MatDialog, useValue: matDialogService }, { provide: StockServiceService, useValue: mysharesServiceStub }],
    })
      .compileComponents();

    fixture = TestBed.createComponent(PortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not render a table of shares', () => {
    expect(fixture.nativeElement.querySelector('table')).toBeFalsy();
  });
  it('should not have any buttons inside table', () => {
    expect(fixture.nativeElement.querySelector('table button')).toBeFalsy();
  });

});
