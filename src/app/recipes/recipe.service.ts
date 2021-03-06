import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  recipes: Recipe[] = [
    new Recipe(
      'Chilaquiles',
      'Description of Tasty Chilaquiles',
      'https://cdn.pixabay.com/photo/2015/09/16/20/10/dough-943245_960_720.jpg',
      [new Ingredient('Tortillas', 300), new Ingredient('Salsa verde', 250)]
    ),
    new Recipe(
      'Fat Joe Burger',
      'A Tasty Burger with lots of fat',
      'https://cdn.pixabay.com/photo/2015/09/16/20/10/dough-943245_960_720.jpg',
      [
        new Ingredient('Angus Meat', 3),
        new Ingredient('Cheddar Cheese', 2),
        new Ingredient('Bacon', 3),
      ]
    ),
  ];

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  constructor(private slService: ShoppingListService) {}

  addIngredientsToShoppingList(ingredients: Ingredient[]): void {
    this.slService.addIngredients(ingredients);
  }

  getRecipeById(index: number): Recipe {
    return this.recipes[index];
  }

  addRecipe(recipe: Recipe): void {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe): void {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number): void {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
