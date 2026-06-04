import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AteneoCreate } from './ateneo-create';

describe('AteneoCreate', () => {
  let component: AteneoCreate;
  let fixture: ComponentFixture<AteneoCreate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AteneoCreate],
    }).compileComponents();

    fixture = TestBed.createComponent(AteneoCreate);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
