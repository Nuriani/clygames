import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArreUnicornioComponent } from './arre-unicornio.component';

describe('ArreUnicornioComponent', () => {
  let component: ArreUnicornioComponent;
  let fixture: ComponentFixture<ArreUnicornioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArreUnicornioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArreUnicornioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
