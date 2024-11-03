import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-exercise-details',
  templateUrl: 'exercise-details.page.html',
  styleUrls: ['exercise-details.page.scss'],
})
export class ExerciseDetailsPage implements OnInit {
  exercise: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.exercise = JSON.parse(params['exercise']); // Recuperar datos pasados
    });
  }

  goBack() {
    window.history.back(); // Método para volver a la página anterior
  }
}
