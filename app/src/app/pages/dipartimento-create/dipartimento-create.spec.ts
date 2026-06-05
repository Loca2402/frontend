import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DipartimentoCreate } from './dipartimento-create';

describe('DipartimentoCreate', () => {
  let component: DipartimentoCreate;
  let fixture: ComponentFixture<DipartimentoCreate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DipartimentoCreate],
    }).compileComponents();

    fixture = TestBed.createComponent(DipartimentoCreate);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
