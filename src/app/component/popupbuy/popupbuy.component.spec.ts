import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PopupbuyComponent } from './popupbuy.component';
import { StockServiceService } from 'src/app/service/stock-service.service';
import { of } from 'rxjs';


describe('PopupbuyComponent', () => {
  let component: PopupbuyComponent;
  let fixture: ComponentFixture<PopupbuyComponent>;

  let currentPriceStub = {
    getPrice: () => 
    of(
      {"ticker": "c", "price_data": [{"name": "2022-08-24", "value": 50.95000076293945}]}
    )
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupbuyComponent ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} },
        { provide: StockServiceService, useValue: currentPriceStub}
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupbuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have price auto filled', () => {
    expect(fixture.nativeElement.querySelectorAll('h5')?.item(0).textContent).toBe('Current Price : $50.95000076293945');
  })
});
