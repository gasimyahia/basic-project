import { Component, OnInit, OnDestroy } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit , OnDestroy {
  recipes:Recipe[];
  subscription:Subscription;

  constructor(private recipeService:RecipeService,
              private route:ActivatedRoute,
              private router:Router
            ) { }

  ngOnInit(): void {
    this.recipes=this.recipeService.getRecipes();
    this.subscription= this.recipeService.recipeChanged.subscribe(
      (recipes:Recipe[])=>{
        this.recipes=recipes;
      }
    );
  }

  onNewRecipe(){
    this.router.navigate(['new'],/* point to this route */{relativeTo:this.route});
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
