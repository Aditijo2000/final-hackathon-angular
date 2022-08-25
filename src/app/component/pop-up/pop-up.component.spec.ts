import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PopUpComponent } from './pop-up.component';
import { StockServiceService } from 'src/app/service/stock-service.service';
import { of } from 'rxjs';

describe('PopUpComponent', () => {
  let component: PopUpComponent;
  let fixture: ComponentFixture<PopUpComponent>;

let currentPriceStub = {
  getPrice: () => 
  of(
    {"ticker": "c", "price_data": [{"name": "2022-08-24", "value": 50.95000076293945}]}
  )
}

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatDialogModule],
      declarations: [PopUpComponent],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} },
        { provide: StockServiceService, useValue: currentPriceStub}
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have price auto filled', () => {
    expect(fixture.nativeElement.querySelectorAll('h5')?.item(1).textContent).toBe('Current Price : $50.95000076293945');
  })


});
