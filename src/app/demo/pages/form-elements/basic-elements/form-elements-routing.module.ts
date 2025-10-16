import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'basic',
        loadComponent: () => import('./basic-elements.component')
          .then(c => c.VehicleFormComponent)
      },
      {
        path: 'vehicle-form',
        loadComponent: () => import('./basic-elements.component')
          .then(c => c.VehicleFormComponent)
      },
      // Add a redirect or default route if needed
      {
        path: '',
        redirectTo: 'basic',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormElementsRoutingModule { }