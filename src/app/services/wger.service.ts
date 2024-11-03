import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Exercise } from '../models/exercise.model'; // Asegúrate de ajustar la ruta según corresponda

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {
  private apiUrl = 'https://exercisedb.p.rapidapi.com/exercises'; // URL de la API

  constructor(private http: HttpClient) {}

  getExercises(limit: number = 10): Observable<Exercise[]> {
    return this.http.get<Exercise[]>(`${this.apiUrl}?limit=${limit}`, {
      headers: {
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
        'X-RapidAPI-Key': 'da140266abmshf837317188f6108p1fa42djsn7e3dcc1b5e4e' // Reemplaza con tu clave de API
      }
    }).pipe(
      map((response: any) => {
        return response.map((exercise: any) => ({
          id: exercise.id,
          name: exercise.name,
          description: exercise.description,
          image_url: exercise.gifUrl, // Asegúrate de que este campo existe
          equipment: exercise.equipment,
          target: exercise.target,
          bodyPart: exercise.bodyPart,
          instructions: exercise.instructions,
          secondaryMuscles: exercise.secondaryMuscles,
        }));
      })
    );
  }
}
