import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowEmpDetailComponentComponent } from './show-emp-detail-component.component';

describe('ShowEmpDetailComponentComponent', () => {
  let component: ShowEmpDetailComponentComponent;
  let fixture: ComponentFixture<ShowEmpDetailComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowEmpDetailComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowEmpDetailComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
