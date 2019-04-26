
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsdataTableComponent } from './asdata-table.component';

describe('AsdataTableComponent', () => {
  let component: AsdataTableComponent;
  let fixture: ComponentFixture<AsdataTableComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AsdataTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsdataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
