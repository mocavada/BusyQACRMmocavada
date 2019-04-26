import { DemoDataShareViewchildComponent } from './demo-datashare-viewchild.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';


describe('DemoViewchildComponent', () => {
  let component: DemoDataShareViewchildComponent;
  let fixture: ComponentFixture<DemoDataShareViewchildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DemoDataShareViewchildComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoDataShareViewchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
