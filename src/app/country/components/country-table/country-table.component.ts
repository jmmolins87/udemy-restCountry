import { Component, Input } from '@angular/core';
import { RESTCountriesResponse } from '../../interfaces/country.interfaces';

@Component({
  selector: 'app-country-table',
  templateUrl: './country-table.component.html',
  styles: [
  ]
})
export class CountryTableComponent {

  @Input() countries: RESTCountriesResponse[] = []

}
