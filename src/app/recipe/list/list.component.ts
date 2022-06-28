import { Component, EventEmitter, OnInit, Output } from '@angular/core'
import { Recipe } from '../recipe.model'

@Component({
    selector: 'recipe-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss',],
})

export class RecipeList{
    @Output() recipeWasSelected = new EventEmitter<Recipe>()

    recipes: Recipe[] = [
        new Recipe('Hobbit Style Mushroom Toast', 'This is detailed description', 'https://2geekswhoeat.com/wp-content/uploads/2019/05/Tolkien-Mushroom-Toast-1-768x512.jpg'),
        new Recipe('The Unnamed Trucker Burger', 'Lorem ipsun sit amet', 'https://2geekswhoeat.com/wp-content/uploads/2021/11/Resident-Evil-Trucker-Burger-1-768x512.jpg')
    ]
    
    constructor(){}

    ngOnInit(){}

    onSelectRecipe( recipe: Recipe){
        this.recipeWasSelected.emit(recipe)
    }
    
}