import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedialogComponent } from './sharedialog.component';

describe('SharedialogComponent', () => {
  let component: SharedialogComponent;
  let fixture: ComponentFixture<SharedialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SharedialogComponent]
    });
    fixture = TestBed.createComponent(SharedialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
