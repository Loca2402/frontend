import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DipartimentiList } from './dipartimenti-list';

describe('DipartimentiList', () => {
  let component: DipartimentiList;
  let fixture: ComponentFixture<DipartimentiList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DipartimentiList],
    }).compileComponents();

    fixture = TestBed.createComponent(DipartimentiList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
