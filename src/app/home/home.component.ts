import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Country } from '../interfaces/country';
import { Gender } from '../interfaces/gender';
import { Age } from '../interfaces/age';
import { delay, forkJoin } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  name: string = '';
  gender: Gender | null = null;
  age: Age | null = null;
  country: Country[] = [];
  isLoading = false;

  constructor(private apiService: ApiService) {}

  onSubmit() {
    this.getAllData();
  }

  getAllData() {
    this.isLoading = true;
    forkJoin([
      this.apiService.getAgeByName(this.name),
      this.apiService.getCountryByName(this.name),
      this.apiService.getGenderByName(this.name),
    ])
      .pipe(delay(5000))
      .subscribe(([age, country, gender]) => {
        this.age = age;
        this.country = country;
        this.gender = gender;
        this.isLoading = false;
      });
  }
}
