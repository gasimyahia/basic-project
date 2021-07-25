import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';
//import { EventEmitter } from '@angular/core';

export class ShoppingListService{
  // ingredientChanged=new EventEmitter<Ingredient[]>();
  ingredientChanged=new Subject<Ingredient[]>();
  startedIditing=new Subject<number>();
  private ingredients:Ingredient[]=[
    new Ingredient('Apples',7),
    new Ingredient('Tomatoes',10)
  ];

  getIngredients(){
    return this.ingredients.slice();
  }

  getIngredint(index:number){
    return this.ingredients[index];
  }

  addIngredient(ingredient:Ingredient){
    this.ingredients.push(ingredient);
    // to return all ingredient after add new Ingredient
    this.ingredientChanged.next(this.ingredients.slice());
    //this.ingredientChanged.emit(this.ingredients.slice());

  }

  addIngredients(ingredients:Ingredient[]){
    // adding shopping list ingredient to ingredient arrage
    // for(let ingredient of ingredients){
    //   this.addIngredient(ingredient);
    // }

    this.ingredients.push(...ingredients);
    this.ingredientChanged.next(this.ingredients.slice());
    //this.ingredientChanged.emit(this.ingredients.slice());
  }

  updateIngredient(index:number,newIngredient:Ingredient){
    this.ingredients[index]=newIngredient;
    this.ingredientChanged.next(this.ingredients.slice());
  }

  deleteIngredient(index:number){
    this.ingredients.splice(index,1);
    this.ingredientChanged.next(this.ingredients.slice());
  }
}
