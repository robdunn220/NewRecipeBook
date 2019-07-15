import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-overview',
  templateUrl: './recipe-overview.component.html',
  styleUrls: ['./recipe-overview.component.css']
})
export class RecipeOverviewComponent implements OnInit {
  @Input() selectedRecipe: Recipe;

  constructor() { }

  ngOnInit() {
  }

}
