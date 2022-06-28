import { Component, Input, EventEmitter, Output } from '@angular/core'
import { Recipe } from '../../recipe.model'

@Component({
    selector: 'recipe-item',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.scss',],
})

export class RecipeItem{
    @Input() recipe: Recipe
    @Output() currentRecipe = new EventEmitter<void>()

    constructor(){}

    onSelectRecipe(recipeSelected: Recipe){
        this.currentRecipe.emit()
    }
}