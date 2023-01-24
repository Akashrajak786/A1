import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JanakpurimoreComponent } from './janakpurimore.component';

describe('JanakpurimoreComponent', () => {
  let component: JanakpurimoreComponent;
  let fixture: ComponentFixture<JanakpurimoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JanakpurimoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JanakpurimoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
