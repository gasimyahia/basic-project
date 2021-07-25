import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService{
  recipeChanged=new Subject<Recipe[]>();
  //recipeSelected =new EventEmitter<Recipe>();
  private recipes:Recipe[]=[
    new Recipe(
      'A rial recipe',
      'this simple test',
      'https://www.publicdomainpictures.net/pictures/320000/velka/background-image.png',
      [
        new Ingredient('meat',8),
        new Ingredient('orange',9)
      ]
    ),
    new Recipe(
      'A test recipe',
      'this simple test',
      'https://images.unsplash.com/photo-1612151855475-877969f4a6cc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80',
      [
        new Ingredient('apple',8),
        new Ingredient('banana',6)
      ]
    )
  ];

  constructor(private rlService:ShoppingListService){}

  setRecipes(recipes:Recipe[]){
    this.recipes=recipes;
    this.recipeChanged.next(this.recipes.slice());
  }

  getRecipes(){
    return this.recipes.slice();
  }

  getRecipe(index:number){
    return this.recipes[index];
  }

  addIngredientToShoppingList(ingredients:Ingredient[]){
    this.rlService.addIngredients(ingredients);
  }

  addRecipe(recipe:Recipe){
    this.recipes.push(recipe);
    this.recipeChanged.next(this.recipes.slice());
  }

  updateRecipe(index:number,newRecipe:Recipe){
    this.recipes[index]=newRecipe;
    this.recipeChanged.next(this.recipes.slice());
  }

  deleteRecipe(index:number){
    this.recipes.splice(index,1);
    this.recipeChanged.next(this.recipes.slice());
  }
}
