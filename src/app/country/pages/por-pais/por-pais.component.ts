import { Component, Input } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { RESTCountriesResponse } from '../../interfaces/country.interfaces';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {

  termino: string = '';
  hasError: boolean = false;
  countries: RESTCountriesResponse[] = [];

  constructor(
    private _countryService: CountryService
  ) { }

  buscar() {
    this.hasError;
    console.log(this.termino);
    
    this._countryService.buscarPais(this.termino)
    .subscribe( countries => {
      console.log( countries );
      this.countries = countries;
    },
    (err) => {
      this.hasError = true;
      this.countries = [];
    });
  }

}
