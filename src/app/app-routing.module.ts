import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './theme/layout/admin/admin.component';
import { GuestComponent } from './theme/layout/guest/guest.component';
import { VehiculeComponent } from './demo/pages/gestion/vehicule/vehicule.component';
import { RapportExpertComponent } from './demo/pages/gestion/rapport-expert/rapport-expert.component';
import { ContratMicroassuranceComponent } from './demo/pages/gestion/contrat-microassurance/contrat-microassurance.component';
import { PaiementComponent } from './demo/pages/gestion/paiement/paiement.component';
import { MicrocreditComponent } from './demo/pages/gestion/microcredit/microcredit.component';
import { VidangeComponent } from './demo/pages/gestion/vidange/vidange.component';
import { PiecesDetacheesComponent } from './demo/pages/gestion/pieces-detachees/pieces-detachees.component';
import { CommandesComponent } from './demo/pages/gestion/commandes/commandes.component';
import { ChatmessageComponent } from './demo/pages/gestion/chatmessage/chatmessage.component';


const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      { path: 'gestion/vehicule', component: VehiculeComponent },
{ path: 'gestion/rapport-expert', component: RapportExpertComponent },
{ path: 'gestion/contrat-microassurance', component: ContratMicroassuranceComponent },
{ path: 'gestion/paiement', component: PaiementComponent },
{ path: 'gestion/microcredit', component: MicrocreditComponent },
{ path: 'gestion/vidange', component: VidangeComponent },
{ path: 'gestion/pieces-detachees', component: PiecesDetacheesComponent },
{ path: 'gestion/commandes', component: CommandesComponent },
{ path: 'gestion/chatmessage', component: ChatmessageComponent },

      {
        path: 'dashboard',
        loadComponent: () => import('./demo/dashboard/dashboard.component').then((c) => c.DashboardComponent)
      },
      {
        path: 'basic',
        loadChildren: () => import('./demo/ui-elements/ui-basic/ui-basic.module').then((m) => m.UiBasicModule)
      },
      {
        path: 'forms',
        loadChildren: () => import('./demo/pages/form-elements/basic-elements/form-elements.module').then((m) => m.FormElementsModule)
      },
      {
        path: 'tables',
        loadChildren: () => import('./demo/pages/tables/tables.module').then((m) => m.TablesModule)
      },
      {
        path: 'apexchart',
        loadComponent: () => import('./demo/pages/core-chart/apex-chart/apex-chart.component')
      },
      {
        path: 'sample-page',
        loadComponent: () => import('./demo/extra/sample-page/sample-page.component')
      }
    ]
  },
  {
    path: '',
    component: GuestComponent,
    children: [
      {
        path: 'auth',
        loadChildren: () => import('./demo/pages/authentication/authentication.module').then((m) => m.AuthenticationModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
