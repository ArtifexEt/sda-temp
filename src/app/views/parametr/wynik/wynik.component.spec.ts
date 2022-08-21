import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WynikComponent } from './wynik.component';

describe('WynikComponent', () => {
  let component: WynikComponent;
  let fixture: ComponentFixture<WynikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WynikComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WynikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
