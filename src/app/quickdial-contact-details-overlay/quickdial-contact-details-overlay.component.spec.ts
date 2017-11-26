import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickdialContactDetailsOverlayComponent } from './quickdial-contact-details-overlay.component';

describe('QuickdialContactDetailsOverlayComponent', () => {
  let component: QuickdialContactDetailsOverlayComponent;
  let fixture: ComponentFixture<QuickdialContactDetailsOverlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickdialContactDetailsOverlayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickdialContactDetailsOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
