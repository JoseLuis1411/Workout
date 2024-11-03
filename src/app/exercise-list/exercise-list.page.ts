import { Component, OnInit } from '@angular/core';
import { ExerciseStorageService } from '../services/exercise-storage.service';
import { Router } from '@angular/router'; // Importa Router
import { NavController } from '@ionic/angular'; // Importa NavController


@Component({
  selector: 'app-exercise-list',
  templateUrl: './exercise-list.page.html',
  styleUrls: ['./exercise-list.page.scss'],
})
export class ExerciseListPage implements OnInit {
  savedExercises: any[] = [];
  daysOfWeek: string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  selectedDay: string = 'Monday'; // Día predeterminado
  filteredExercises: any[] = [];

  constructor(private exerciseStorageService: ExerciseStorageService, private navCtrl: NavController) {}

  async ngOnInit() {
    // Aquí puedes cargar los ejercicios desde algún servicio o almacenamiento local
    this.savedExercises = await this.exerciseStorageService.getSavedExercises();
    this.filterExercisesByDay();
  }

  goBack() {
    window.history.back(); // Método para volver a la página anterior
  }

  // Actualiza la lista de ejercicios filtrados cada vez que cambia el día seleccionado
  filterExercisesByDay() {
    this.filteredExercises = this.savedExercises.filter(exercise => exercise.day === this.selectedDay);
  }

  // Detecta cambios en el día seleccionado
  onDayChange() {
    this.filterExercisesByDay();
  }

  // Asegúrate de que este método está presente
  goToDetails(exercise: any) {
    this.navCtrl.navigateForward(['/exercise-details', { exercise: JSON.stringify(exercise) }]);
  }

  async removeExercise(exercise: any) {
    // Filtrar el ejercicio que se va a eliminar
    this.savedExercises = this.savedExercises.filter(e => e !== exercise);
    
    // Guardar la lista actualizada en el almacenamiento local
    localStorage.setItem('savedExercises', JSON.stringify(this.savedExercises));
  
    // Actualizar la lista filtrada
    this.filterExercisesByDay();
  }
}
