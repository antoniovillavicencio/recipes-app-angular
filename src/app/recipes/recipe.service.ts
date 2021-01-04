import {EventEmitter} from '@angular/core';
import {Recipe} from './recipe.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Test Recipe',
      'Description of Test Recipe',
      'https://cdn.pixabay.com/photo/2015/09/16/20/10/dough-943245_960_720.jpg'),
    new Recipe('Another Recipe',
      'Description of another Test Recipe',
      'https://cdn.pixabay.com/photo/2015/09/16/20/10/dough-943245_960_720.jpg')
  ];

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }
}
