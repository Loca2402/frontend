import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AteneoForm } from './ateneo-form';

describe('AteneoForm', () => {
  let component: AteneoForm;
  let fixture: ComponentFixture<AteneoForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AteneoForm],
    }).compileComponents();

    fixture = TestBed.createComponent(AteneoForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
