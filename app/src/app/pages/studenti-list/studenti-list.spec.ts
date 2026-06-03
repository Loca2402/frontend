import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentiList } from './studenti-list';

describe('StudentiList', () => {
  let component: StudentiList;
  let fixture: ComponentFixture<StudentiList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentiList],
    }).compileComponents();

    fixture = TestBed.createComponent(StudentiList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
