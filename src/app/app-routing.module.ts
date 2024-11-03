import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ExerciseDetailsPage } from './exercise-details/exercise-details.page'; // Asegúrate de importar
import { ExerciseListPageModule } from './exercise-list/exercise-list.module';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) },
  { path: 'exercise-list', loadChildren: () => import('./exercise-list/exercise-list.module').then(m => m.ExerciseListPageModule) },
  {
    path: 'exercise-details',
    loadChildren: () => import('./exercise-details/exercise-details.module').then(m => m.ExerciseDetailsPageModule)
  },
  {
    path: 'exercise-list',
    loadChildren: () => import('./exercise-list/exercise-list.module').then( m => m.ExerciseListPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
