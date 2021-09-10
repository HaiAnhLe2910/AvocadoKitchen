import {Component, OnInit} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list.service";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  input: itemInput = {name: '', amount: 0};

  /*@ViewChild('itemName', {static: true}) itemName: ElementRef;
  @ViewChild('itemAmount', {static: true}) itemAmount: ElementRef;*/


  constructor(private shoppingListService: ShoppingListService) {
  }

  ngOnInit(): void {
  }

  onIngredientAdded() {
    /*this.ingredientAdd.emit({
      name: this.itemName.nativeElement.value,
      amount: parseInt(this.itemAmount.nativeElement.value)
    } as Ingredient);*/

    const newIngredient = new Ingredient(this.input.name, this.input.amount)
    this.shoppingListService.addIngredient(newIngredient);

  }
}

interface itemInput {
  name: string,
  amount: number
}
