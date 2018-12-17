import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BufferPageComponent } from './buffer-page.component';

describe('BufferPageComponent', () => {
  let component: BufferPageComponent;
  let fixture: ComponentFixture<BufferPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BufferPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BufferPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
