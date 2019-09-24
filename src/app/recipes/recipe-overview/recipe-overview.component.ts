import { Component, OnInit, Input } from '@angular/core';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-overview',
  templateUrl: './recipe-overview.component.html',
  styleUrls: ['./recipe-overview.component.css'],
  providers: [RecipeService]
})
export class RecipeOverviewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
