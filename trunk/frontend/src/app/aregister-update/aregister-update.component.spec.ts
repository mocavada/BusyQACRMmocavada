import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AregisterUpdateComponent } from './aregister-update.component';

describe('AregisterUpdateComponent', () => {
  let component: AregisterUpdateComponent;
  let fixture: ComponentFixture<AregisterUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AregisterUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AregisterUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
