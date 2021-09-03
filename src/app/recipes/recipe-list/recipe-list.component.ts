import { Component, OnInit } from '@angular/core';
import {Recipe} from "../recipes.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[]=[
    new Recipe('A Test Recipe','This is simply a test','https://www.wellplated.com/wp-content/uploads/2020/01/Healthy-Baked-Teriyaki-Salmon-recipe.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
