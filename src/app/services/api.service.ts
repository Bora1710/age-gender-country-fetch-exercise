import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Gender } from '../interfaces/gender';
import { Age } from '../interfaces/age';
import { Country, CountryResponse } from '../interfaces/country';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  private genderApiUrl = environment.genderApiUrl;
  private countryApiUrl = environment.countryApiUrl;
  private ageApiUrl = environment.ageApiUrl;
  
  constructor(private http: HttpClient) {}

  getGenderByName(name: string): Observable<Gender> {
    let url = `${this.genderApiUrl}?name=${name}`;
    return this.http.get<Gender>(url);
  }
  getCountryByName(name: string): Observable<Country[]> {
    let url = `${this.countryApiUrl}?name=${name}`;
    return this.http.get<CountryResponse>(url).pipe(map(response => response.country));
  }
  getAgeByName(name: string): Observable<Age> {
    let url = `${this.ageApiUrl}?name=${name}`;
    return this.http.get<Age>(url);
  }
  
}
