import { DemoDataShareInputComponent } from './demo-datashare-input.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

describe('DemoDataShareInputComponent', () => {
  let component: DemoDataShareInputComponent;
  let fixture: ComponentFixture<DemoDataShareInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DemoDataShareInputComponent]

    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoDataShareInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
