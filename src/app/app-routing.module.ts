import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PorPaisComponent } from './country/por-pais/por-pais.component';
import { PorCapitalComponent } from './country/por-capital/por-capital.component';
import { PorRegionComponent } from './country/por-region/por-region.component';
import { VerPaisComponent } from './country/ver-pais/ver-pais.component';

const routes: Routes = [
  {
    path: '',
    component: PorPaisComponent,
    pathMatch: 'full'
  },
  {
    path: 'capital',
    component: PorCapitalComponent
  },
  {
    path: 'region',
    component: PorRegionComponent
  },
  {
    path: 'country/:code',
    component: VerPaisComponent
  },
  {
    path: '**',
    component: PorPaisComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
