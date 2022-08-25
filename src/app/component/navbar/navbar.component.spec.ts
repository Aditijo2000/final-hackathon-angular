import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have nav element', () => {
    var nav:HTMLElement = fixture.nativeElement.querySelector("nav");
    expect(nav).toBeTruthy();
  });

  it('should have title \"Coding Ninjas\"', () => {
    var nav:HTMLElement = fixture.nativeElement.querySelector("nav");
    expect(nav.querySelector('.navbar-brand')?.textContent).toContain('Coding Ninjas');
  });
});
