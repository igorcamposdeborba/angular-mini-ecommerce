import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewCheckoutComponent } from './preview-checkout.component';

describe('PreviewCheckoutComponent', () => {
  let component: PreviewCheckoutComponent;
  let fixture: ComponentFixture<PreviewCheckoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviewCheckoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreviewCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
