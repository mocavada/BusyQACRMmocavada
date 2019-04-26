import { DemoDataShareOutputComponent } from './demo-datashare-output.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';


describe('DemoDataShareOutputComponent', () => {
  let component: DemoDataShareOutputComponent;
  let fixture: ComponentFixture<DemoDataShareOutputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoDataShareOutputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoDataShareOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
