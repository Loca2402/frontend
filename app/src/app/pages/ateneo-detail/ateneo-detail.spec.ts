import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AteneoDetail } from './ateneo-detail';

describe('AteneoDetail', () => {
  let component: AteneoDetail;
  let fixture: ComponentFixture<AteneoDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AteneoDetail],
    }).compileComponents();

    fixture = TestBed.createComponent(AteneoDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
