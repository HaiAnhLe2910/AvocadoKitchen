import {Component, OnDestroy, OnInit} from '@angular/core';
import {Recipe} from "../recipes.model";
import {RecipeService} from "../recipe.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {Ingredient} from "../../shared/ingredient.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Recipe[];
  private recChangeSub: Subscription;

  constructor(private recipeService: RecipeService, private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
    this.recChangeSub = this.recipeService.recipeChanged.subscribe((recList: Recipe[]) => this.recipes = recList);
  }

  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy() {
    this.recChangeSub.unsubscribe();
  }
}
