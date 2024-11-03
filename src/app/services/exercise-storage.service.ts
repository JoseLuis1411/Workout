import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class ExerciseStorageService {
  private storageInitialized = false;

  constructor(private storage: Storage) {
    this.init();
  }

  // Inicializa el almacenamiento
  async init() {
    if (!this.storageInitialized) {
      await this.storage.create();
      this.storageInitialized = true;
    }
  }

  async saveExercise(exercise: any) {
    // Obtener los ejercicios existentes del almacenamiento local
    const savedExercises = (await this.getSavedExercises()) || [];
  
    // Añadir el nuevo ejercicio a la lista
    savedExercises.push(exercise); // Asegúrate de que 'exercise' tenga la información correcta
  
    // Guardar la lista actualizada en el almacenamiento local
    localStorage.setItem('savedExercises', JSON.stringify(savedExercises));
  }
  

  async getSavedExercises(): Promise<any[]> {
    // Obtener los ejercicios guardados del almacenamiento local
    const savedExercises = localStorage.getItem('savedExercises');
    return savedExercises ? JSON.parse(savedExercises) : []; // Devuelve un array vacío si no hay ejercicios
  }

  // Limpia todos los ejercicios guardados (opcional)
  async clearExercises() {
    await this.storage.remove('savedExercises');
  }
}
