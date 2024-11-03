import { TestBed } from '@angular/core/testing';

import { ExerciseStorageService } from './exercise-storage.service';

describe('ExerciseStorageService', () => {
  let service: ExerciseStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExerciseStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
