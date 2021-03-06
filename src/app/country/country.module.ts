import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// ** My Pages **
import { PorCapitalComponent } from './pages/por-capital/por-capital.component';
import { PorPaisComponent } from './pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pages/por-region/por-region.component';
import { VerPaisComponent } from './pages/ver-pais/ver-pais.component';
import { CountryTableComponent } from './components/country-table/country-table.component';
import { CountryInputComponent } from './components/country-input/country-input.component';


@NgModule({
  declarations: [
    // ** My Pages **
    PorPaisComponent,
    PorCapitalComponent,
    PorRegionComponent,
    VerPaisComponent,
    CountryTableComponent,
    CountryInputComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    // ** My Pages **
    PorPaisComponent,
    PorCapitalComponent,
    PorRegionComponent,
    VerPaisComponent
  ]
})
export class CountryModule { }
