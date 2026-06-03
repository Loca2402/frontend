import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorsiList } from './corsi-list';

describe('CorsiList', () => {
  let component: CorsiList;
  let fixture: ComponentFixture<CorsiList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CorsiList],
    }).compileComponents();

    fixture = TestBed.createComponent(CorsiList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
