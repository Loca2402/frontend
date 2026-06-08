import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorsoDetail } from './corso-detail';

describe('CorsoDetail', () => {
  let component: CorsoDetail;
  let fixture: ComponentFixture<CorsoDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CorsoDetail],
    }).compileComponents();

    fixture = TestBed.createComponent(CorsoDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
