import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametrComponent } from './parametr.component';

describe('ParametrComponent', () => {
  let component: ParametrComponent;
  let fixture: ComponentFixture<ParametrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParametrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParametrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
