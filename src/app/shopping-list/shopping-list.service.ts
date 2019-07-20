import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  errorMessage = 'Cannot add repeat items!';

  private ingredients: Ingredient[] = [
    new Ingredient('Garlic', 3),
    new Ingredient('Onion', 1),
    new Ingredient('Potato', 2),
    new Ingredient('Olive Oil', 1)
  ];

  getShopList() {
    return this.ingredients.slice();
  }

  addToList(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  checkShopList(ingredients: Ingredient) {
    for (const i of this.ingredients) {
      if (ingredients.name === i.name) {
        i.amount += ingredients.amount;
        return false;
      }
    }

    this.addToList(ingredients);
  }

  constructor() { }
}
