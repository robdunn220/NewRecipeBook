import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.css']
})
export class ShopListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Garlic', 3),
    new Ingredient('Onion', 1)
  ];

  constructor() { }

  ngOnInit() {
  }

}
