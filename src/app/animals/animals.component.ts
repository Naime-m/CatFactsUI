import { Component, OnInit } from '@angular/core';
import { Animal } from '../models/animal';
import { AnimalService } from '../services/animal.service';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css']
})
export class AnimalsComponent implements OnInit {

  animal: Animal[] = [] ;
  

  constructor(private animalService: AnimalService) {}

  ngOnInit(): void {
  this.getAllAnimals();
  }

  getAllAnimals() {
    this.animalService.onGetAllAnimals().subscribe(
      response => {
        this.animal = response;
      }
    )
  }


}
