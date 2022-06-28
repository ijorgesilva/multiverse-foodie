import { Component, Input, OnInit } from '@angular/core'
import { Ingredient } from 'src/app/shared/ingredient.model'

@Component({
    selector: 'shopping-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss',],
})

export class ShoppingList{
    ingredients: Ingredient[] = [
        new Ingredient('Manticore Scalps', 5),
        new Ingredient('Dragon Liver', 1)
    ]
    
    constructor(){}

    ngOnInit(){
        console.log(this.ingredients)
    }

    addIngredient(ingredient: Ingredient){
        this.ingredients.push(ingredient)
    }
}