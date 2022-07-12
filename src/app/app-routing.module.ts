import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PorCapitalComponent } from './country/pages/por-capital/por-capital.component';
import { PorPaisComponent } from './country/pages/por-pais/por-pais.component';
import { PorRegionComponent } from './country/pages/por-region/por-region.component';
import { VerPaisComponent } from './country/pages/ver-pais/ver-pais.component';

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
