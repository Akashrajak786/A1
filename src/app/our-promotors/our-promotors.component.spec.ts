import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurPromotorsComponent } from './our-promotors.component';

describe('OurPromotorsComponent', () => {
  let component: OurPromotorsComponent;
  let fixture: ComponentFixture<OurPromotorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurPromotorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurPromotorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
