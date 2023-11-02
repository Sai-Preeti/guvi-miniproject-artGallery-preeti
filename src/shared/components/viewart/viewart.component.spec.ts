import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewartComponent } from './viewart.component';

describe('ViewartComponent', () => {
  let component: ViewartComponent;
  let fixture: ComponentFixture<ViewartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewartComponent]
    });
    fixture = TestBed.createComponent(ViewartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
