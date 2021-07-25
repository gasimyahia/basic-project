import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { AuthGurad } from './auth/auth-gurad.service';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { HomeComponent } from './core/home/home.component';

const routes: Routes = [
  // {path:'', redirectTo:'/recipes',pathMatch:'full'},
  {path:'', component:HomeComponent},
  {path:'recipes', loadChildren:() => import('./recipes/recipes.module').then(m => m.RecipesModule)},
  {path:'shopping-list',component:ShoppingListComponent,canActivate:[AuthGurad]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
