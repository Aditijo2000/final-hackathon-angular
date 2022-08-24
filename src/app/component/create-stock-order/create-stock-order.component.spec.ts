import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateStockOrderComponent } from './create-stock-order.component';

describe('CreateStockOrderComponent', () => {
  let component: CreateStockOrderComponent;
  let fixture: ComponentFixture<CreateStockOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateStockOrderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateStockOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
