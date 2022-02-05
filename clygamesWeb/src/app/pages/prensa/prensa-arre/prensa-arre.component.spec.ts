import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrensaArreComponent } from './prensa-arre.component';

describe('PrensaArreComponent', () => {
  let component: PrensaArreComponent;
  let fixture: ComponentFixture<PrensaArreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrensaArreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrensaArreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
