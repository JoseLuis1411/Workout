import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExerciseListPage } from './exercise-list.page';

describe('ExerciseListPage', () => {
  let component: ExerciseListPage;
  let fixture: ComponentFixture<ExerciseListPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciseListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
