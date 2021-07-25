import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './recipes.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipesDetailComponent } from './recipes-detail/recipes-detail.component';
import { AuthGurad } from '../auth/auth-gurad.service';


const recipesRoutes:Routes=[
  {path:'',component:RecipesComponent, children:[
    {path:'',component:RecipeStartComponent},
    {path:'new',component:RecipeEditComponent,canActivate:[AuthGurad]},
    {path:':id',component:RecipesDetailComponent},
    {path:':id/edit',component:RecipeEditComponent,canActivate:[AuthGurad]}
  ]},
]
@NgModule({
  imports:[
    RouterModule.forChild(recipesRoutes)
  ],
  exports:[
    RouterModule
  ]
})
export class RecipesRoutingModule{

}
