import {Injectable, EventEmitter, OnDestroy} from '@angular/core';
import {Recipe} from "./recipes.model";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe('Greek Salad', 'Most famous salad in the world', 'https://cdn.loveandlemons.com/wp-content/uploads/2019/07/greek-salad-2.jpg', [new Ingredient('Cheese', 2), new Ingredient('Cucumber', 5), new Ingredient('Sla', 2)]),
    new Recipe('Teriyaki salmon', 'Western food', 'https://www.wellplated.com/wp-content/uploads/2020/01/Healthy-Baked-Teriyaki-Salmon-recipe.jpg', [new Ingredient('Salmon', 8), new Ingredient('Teriyaki', 1)]),
    new Recipe('Teriyaki beef', 'Asian food', 'https://www.wellplated.com/wp-content/uploads/2020/05/Beef-Stir-Fry.jpg', [new Ingredient('Salmon', 8), new Ingredient('Teriyaki', 1)])
  ];

  constructor(private shoppingListService: ShoppingListService) {
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);

  }

  updateRecipe(index: number) {

  }


}
