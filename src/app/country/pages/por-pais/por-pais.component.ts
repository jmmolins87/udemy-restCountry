import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {

  termino: string = '';
  hasError: boolean = false;

  constructor(
    private _countryService: CountryService
  ) { }

  buscar() {
    this.hasError = false;
    console.log(this.termino);
    
    this._countryService.buscarPais(this.termino)
    .subscribe( resp => {
      console.log( resp );
    },
    (err) => {
      this.hasError = true;
    });
  }

}
