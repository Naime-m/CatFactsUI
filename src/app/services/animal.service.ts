import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Animal } from '../models/animal';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  baseUrl='https://cat-fact.herokuapp.com/facts'

  constructor(private http: HttpClient) { }

  onGetAllAnimals(): Observable<Animal[]> {
  return this.http.get<Animal[]>(this.baseUrl);
  }
}
