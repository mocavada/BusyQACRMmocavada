import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoFormTemplateComponent } from './demo-form-template.component';

describe('DemoFormTemplateComponent', () => {
  let component: DemoFormTemplateComponent;
  let fixture: ComponentFixture<DemoFormTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DemoFormTemplateComponent],
      imports: [FormsModule, ReactiveFormsModule]

    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoFormTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
