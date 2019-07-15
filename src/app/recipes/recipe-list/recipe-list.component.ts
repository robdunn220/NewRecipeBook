import { Component, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    // tslint:disable-next-line:max-line-length
    new Recipe('Porkchops', 'Test Recipe', 'https://hips.hearstapps.com/del.h-cdn.co/assets/18/11/1520972863-pork-chop-vertical.jpg?crop=1.0xw:1xh;center,top&resize=350:*'),
    new Recipe('Morp', 'Meep', 'image path here')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
