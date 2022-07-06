import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// ** My Pages **
import { PorPaisComponent } from './por-pais/por-pais.component';
import { PorCapitalComponent } from './por-capital/por-capital.component';
import { PorRegionComponent } from './por-region/por-region.component';
import { VerPaisComponent } from './ver-pais/ver-pais.component';



@NgModule({
  declarations: [
    // ** My Pages **
    PorPaisComponent,
    PorCapitalComponent,
    PorRegionComponent,
    VerPaisComponent
  ],
  imports: [
    CommonModule
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
