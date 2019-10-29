import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceamComponent } from './serviceam.component';

describe('ServiceamComponent', () => {
  let component: ServiceamComponent;
  let fixture: ComponentFixture<ServiceamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
