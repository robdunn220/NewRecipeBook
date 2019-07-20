import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    // tslint:disable-next-line:max-line-length
    new Recipe('Porkchops', 'Test Recipe', 'https://hips.hearstapps.com/del.h-cdn.co/assets/18/11/1520972863-pork-chop-vertical.jpg?crop=1.0xw:1xh;center,top&resize=350:*',
    [
      new Ingredient('Pork', 4),
      new Ingredient('Garlic', 3),
      new Ingredient('Onion', 2),
      new Ingredient('Olive Oil', 1),
      new Ingredient('Rosemary', 3)
    ]),
    new Recipe('Morp', 'Meep', 'image path here', [new Ingredient('Garlic', 4)])
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  addToList(ingredients: Ingredient[]) {
    for (const i of ingredients) {
      this.shopListService.checkShopList(i);
    }
  }

  constructor(private shopListService: ShoppingListService) { }
}
