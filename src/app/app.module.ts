import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AppHeader } from './header/header.component';
import { ShoppingList, ShoppingListEdit, ShoppingIngredient } from './shopping';
import { Recipes, RecipeList, RecipeItem, RecipeDetails } from './recipe';

@NgModule({
  declarations: [
    AppComponent,
    AppHeader,
    
    ShoppingList,
    ShoppingListEdit,
    ShoppingIngredient,

    Recipes,
    RecipeList,
    RecipeItem,
    RecipeDetails,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
