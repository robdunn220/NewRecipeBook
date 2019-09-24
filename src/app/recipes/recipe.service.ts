import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private recipes: Recipe[] = [
    // tslint:disable-next-line:max-line-length
    new Recipe(1, 'Porkchops', 'Test Recipe', 'https://hips.hearstapps.com/del.h-cdn.co/assets/18/11/1520972863-pork-chop-vertical.jpg?crop=1.0xw:1xh;center,top&resize=350:*',
    [
      new Ingredient('Pork', 4),
      new Ingredient('Garlic', 3),
      new Ingredient('Onion', 2),
      new Ingredient('Olive Oil', 1),
      new Ingredient('Rosemary', 3)
    ]),
    // tslint:disable-next-line:max-line-length
    new Recipe(2, 'Morp', 'Meep', 'https://steemitimages.com/DQmfHedFJStzXRDC2R5fnWrAiYJqWaknPaYTfeQWQe8Boxh/flat%2C800x800%2C075%2Cf.u1.jpg', [new Ingredient('Garlic', 4)])
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addToList(ingredients: Ingredient[]) {
    for (const i of ingredients) {
      this.shopListService.checkShopList(i);
    }
  }

  constructor(private shopListService: ShoppingListService) { }
}
