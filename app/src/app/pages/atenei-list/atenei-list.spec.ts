import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AteneiList } from './atenei-list';

describe('AteneiList', () => {
  let component: AteneiList;
  let fixture: ComponentFixture<AteneiList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AteneiList],
    }).compileComponents();

    fixture = TestBed.createComponent(AteneiList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
