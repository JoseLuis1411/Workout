// src/app/home/home.page.ts
import { Component, OnInit } from '@angular/core';
import { ExerciseService } from '../services/wger.service';
import { NavController } from '@ionic/angular'; // Importa NavController
import { AddExerciseModalComponent } from '../add-exercise-modal/add-exercise-modal.component'; 
import { ModalController } from '@ionic/angular'; // Importar ModalController
import { Router } from '@angular/router'; // Importa Router

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  exercises: any[] = [];
  filteredExercises: any[] = [];; // Ejercicios filtrados para mostrar en la lista

  constructor(private router: Router, private exerciseService: ExerciseService, private navCtrl: NavController,  private modalCtrl: ModalController,) {}

  ngOnInit() {
    this.getExercises(100);
  }

  // Método para cargar todos los ejercicios desde la API
  getExercises(limit: number) {
    this.exerciseService.getExercises(limit).subscribe(
      (data) => {
        this.exercises = data; // Guardamos todos los ejercicios
        this.filteredExercises = [...this.exercises]; // Inicializamos con todos los ejercicios
      },
      (error) => {
        console.error('Error al cargar ejercicios:', error);
      }
    );
  }

  // Asegúrate de que este método está presente
  goToDetails(exercise: any) {
    this.navCtrl.navigateForward(['/exercise-details', { exercise: JSON.stringify(exercise) }]);
  }

  goToExerciseList() {
    this.router.navigate(['/exercise-list']);
  } 

  // Método para filtrar ejercicios según el término de búsqueda
  filterExercises(event: any) {
    const searchTerm = event.target.value.toLowerCase(); // Convertimos a minúsculas para evitar problemas de mayúsculas

    if (!searchTerm) {
      // Si el campo está vacío, mostramos todos los ejercicios
      this.filteredExercises = [...this.exercises];
    } else {
      // Filtramos ejercicios que contengan el término de búsqueda en su nombre
      this.filteredExercises = this.exercises.filter((exercise) =>
        exercise.name.toLowerCase().includes(searchTerm)
      );
    }
  }

  async openAddExerciseModal(exercise: any) {
    const modal = await this.modalCtrl.create({
      component: AddExerciseModalComponent,
      cssClass: 'custom-modal', // Aplica la clase CSS aquí
      componentProps: { exercise: exercise } // Pasa el ejercicio al modal si es necesario
    });
    return await modal.present();
  }
}
