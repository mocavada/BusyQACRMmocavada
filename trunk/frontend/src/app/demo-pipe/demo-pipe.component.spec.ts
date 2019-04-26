import { CapitalizePipe } from '../capitalize/capitalize.pipe';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoPipeComponent } from './demo-pipe.component';

describe('DemoPipeComponent', () => {
  let component: DemoPipeComponent;
  let fixture: ComponentFixture<DemoPipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DemoPipeComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
