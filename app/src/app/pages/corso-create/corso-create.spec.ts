import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorsoCreate } from './corso-create';

describe('CorsoCreate', () => {
  let component: CorsoCreate;
  let fixture: ComponentFixture<CorsoCreate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CorsoCreate],
    }).compileComponents();

    fixture = TestBed.createComponent(CorsoCreate);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
