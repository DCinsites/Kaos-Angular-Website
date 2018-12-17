import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KonsignmentsComponent } from './konsignments.component';

describe('KonsignmentsComponent', () => {
  let component: KonsignmentsComponent;
  let fixture: ComponentFixture<KonsignmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KonsignmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KonsignmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
