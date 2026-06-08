import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudenteCreate } from './studente-create';

describe('StudenteCreate', () => {
  let component: StudenteCreate;
  let fixture: ComponentFixture<StudenteCreate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudenteCreate],
    }).compileComponents();

    fixture = TestBed.createComponent(StudenteCreate);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
