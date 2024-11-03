// add-exercise-modal.component.ts
import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ExerciseStorageService } from '../services/exercise-storage.service';

@Component({
  selector: 'app-add-exercise-modal',
  templateUrl: './add-exercise-modal.component.html',
  styleUrls: ['./add-exercise-modal.component.scss'],
})
export class AddExerciseModalComponent {
  @Input() exercise: any; // Añade esta línea
  selectedDay: string = '';
  daysOfWeek: string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  constructor(private modalCtrl: ModalController, private exerciseStorageService: ExerciseStorageService) {}

  closeModal() {
    this.modalCtrl.dismiss();
  }

  async addExercise(exercise: any, day: string) {
    // Añadir el día al objeto ejercicio
    exercise.day = day;

    // Guardar el ejercicio en el servicio
    await this.exerciseStorageService.saveExercise(exercise);

    // Cerrar el modal después de guardar
    this.closeModal();
    console.log('Ejercicio guardado:', exercise);
  }
}
