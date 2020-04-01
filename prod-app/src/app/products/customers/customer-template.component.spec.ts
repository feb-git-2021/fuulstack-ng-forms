import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerTemplateComponent } from './customer-template.component';

describe('CustomerTemplateComponent', () => {
  let component: CustomerTemplateComponent;
  let fixture: ComponentFixture<CustomerTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
