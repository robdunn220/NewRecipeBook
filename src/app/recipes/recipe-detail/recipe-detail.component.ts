import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;

  addToList() {
    this.recipeService.addToList(this.recipe.ingredients.slice());
  }

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

}
