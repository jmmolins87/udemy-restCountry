import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RESTCountriesResponse } from '../interfaces/country.interfaces';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private apiUrl: string = 'https://restcountries.com/v2';

  constructor(
    private http: HttpClient
  ) { }

  buscarPais(termino: string): Observable<RESTCountriesResponse[]> {
    const url = `${ this.apiUrl }/name/${ termino }`;
    return this.http.get<RESTCountriesResponse[]>( url );
  }
}
