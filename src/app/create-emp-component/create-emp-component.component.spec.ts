import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEmpComponentComponent } from './create-emp-component.component';

describe('CreateEmpComponentComponent', () => {
  let component: CreateEmpComponentComponent;
  let fixture: ComponentFixture<CreateEmpComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateEmpComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEmpComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
