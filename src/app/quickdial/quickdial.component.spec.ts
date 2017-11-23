/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { QuickdialComponent } from './quickdial.component';

describe('QuickdialComponent', () => {
  let component: QuickdialComponent;
  let fixture: ComponentFixture<QuickdialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickdialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickdialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
