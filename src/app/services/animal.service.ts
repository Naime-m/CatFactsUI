import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Fish } from '../models/fish';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  baseUrl='https://www.fishwatch.gov/api/species'

  constructor(private http: HttpClient) { }

  onGetAllFishes(): Observable<Fish> {
  return this.http.get<Fish>(this.baseUrl);
  }
}
