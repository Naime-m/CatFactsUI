import { Component, OnInit } from '@angular/core';
import { AnimalService } from '../services/animal.service';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css']
})
export class AnimalsComponent implements OnInit {

  constructor(private animalService: AnimalService) {}

  ngOnInit(): void {
  this.getAllFishes();
  }
  
  getAllFishes() {
    this.animalService.onGetAllFishes().subscribe(
      response => {
        console.log(response);
      }
    )
  }


}
