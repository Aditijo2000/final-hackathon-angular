import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupbuyComponent } from './popupbuy.component';

describe('PopupbuyComponent', () => {
  let component: PopupbuyComponent;
  let fixture: ComponentFixture<PopupbuyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupbuyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupbuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
