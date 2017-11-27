import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialNumberComponent } from './dial-number.component';

describe('DialNumberComponent', () => {
  let component: DialNumberComponent;
  let fixture: ComponentFixture<DialNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialNumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
