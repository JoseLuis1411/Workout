// src/app/services/wger.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WgerService {
  private apiUrl = 'https://wger.de/api/v2';

  constructor(private http: HttpClient) { }

  // Obtener la lista de ejercicios
  getExercises(): Observable<any> {
    return this.http.get(`${this.apiUrl}/exercise/?format=json`);
  }

  // Obtener imágenes asociadas a un ejercicio
  getExerciseImages(exerciseId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/exerciseimage/?exercise=${exerciseId}&format=json`);
  }
}
