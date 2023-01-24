import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoralwoodmoreComponent } from './coralwoodmore.component';

describe('CoralwoodmoreComponent', () => {
  let component: CoralwoodmoreComponent;
  let fixture: ComponentFixture<CoralwoodmoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoralwoodmoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoralwoodmoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
