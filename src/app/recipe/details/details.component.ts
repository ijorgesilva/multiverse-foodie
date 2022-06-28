import { Component, Input } from '@angular/core'
import { Recipe } from '../recipe.model'

@Component({
    selector: 'recipe-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.scss',],
})

export class RecipeDetails {

    @Input() recipe: Recipe

    constructor(){}

}