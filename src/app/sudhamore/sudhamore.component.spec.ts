import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SudhamoreComponent } from './sudhamore.component';

describe('SudhamoreComponent', () => {
  let component: SudhamoreComponent;
  let fixture: ComponentFixture<SudhamoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SudhamoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SudhamoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
