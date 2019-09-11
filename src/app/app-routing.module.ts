import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeOverviewComponent } from './recipes/recipe-overview/recipe-overview.component';
import { ShopListComponent } from './shopping-list/shop-list/shop-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'recipes', component: RecipeOverviewComponent },
  { path: 'shopping-list', component: ShopListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
