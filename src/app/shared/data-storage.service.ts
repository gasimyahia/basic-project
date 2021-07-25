import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class DataStorageService{
  token:any;
  token=localStorage.getItem()
  constructor(private httpClient:HttpClient,
              private recipeService:RecipeService,
              private authService:AuthService
            ){}

  storeRecipes(){
    // return this.httpClient.put('https://recipe-book-app-647f0-default-rtdb.firebaseio.com/recipes.json',
    //                     this.recipeService.getRecipes(),{
    //                       observe:'body'
    //                     });
    const url='https://recipe-book-app-647f0-default-rtdb.firebaseio.com/recipes.json';
    const req=new HttpRequest("PUT",url,this.recipeService.getRecipes(),{
      reportProgress:true // to show download and upload progress
      // ,params:new HttpParams().set('auth',token)
    });
    return this.httpClient.request(req);
  }

  getRecipes(){
    // const token=this.authService.getToken();
    // console.log(token);
    // this.httpClient.get<Recipe[]>('https://recipe-book-app-647f0-default-rtdb.firebaseio.com/recipes.json')
    this.httpClient.get<Recipe[]>('https://recipe-book-app-647f0-default-rtdb.firebaseio.com/recipes.json',
  {
    observe:'body',
    responseType:'json'
  })
    .pipe(
      map((recipes)=>{
        for(let recipe of recipes){
          if(!recipe['ingredients']){
            recipe['ingredients']=[];
          }
        }
        return recipes;
      }
     )
    ).subscribe(
      (recipes:Recipe[])=>{
        this.recipeService.setRecipes(recipes);

      }
    )
  }
}
