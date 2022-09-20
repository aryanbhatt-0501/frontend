import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllFoodProductComponent } from './all-food-product.component';

describe('AllFoodProductComponent', () => {
  let component: AllFoodProductComponent;
  let fixture: ComponentFixture<AllFoodProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllFoodProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllFoodProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
