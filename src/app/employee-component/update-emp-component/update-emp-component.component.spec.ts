import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEmpComponentComponent } from './update-emp-component.component';

describe('UpdateEmpComponentComponent', () => {
  let component: UpdateEmpComponentComponent;
  let fixture: ComponentFixture<UpdateEmpComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateEmpComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateEmpComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
