import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CreateStockOrderComponent } from './create-stock-order.component';
import { StockServiceService } from 'src/app/service/stock-service.service';
import { of } from 'rxjs';
describe('CreateStockOrderComponent', () => {
  let component: CreateStockOrderComponent;
  let fixture: ComponentFixture<CreateStockOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateStockOrderComponent ],
      providers: [{ provide: StockServiceService, useValue: {} }],
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateStockOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call onSubmit when form is submitted', () => {
    let submitspy = spyOn(component,'onSubmit');
    fixture.debugElement
    .query(By.css('form'))
    .triggerEventHandler('ngSubmit', {});

    expect(submitspy).toHaveBeenCalled();
  });
  
});
