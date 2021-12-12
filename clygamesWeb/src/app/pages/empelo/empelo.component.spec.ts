import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpeloComponent } from './empelo.component';

describe('EmpeloComponent', () => {
  let component: EmpeloComponent;
  let fixture: ComponentFixture<EmpeloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpeloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpeloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
