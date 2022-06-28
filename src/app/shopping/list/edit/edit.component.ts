import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core'
import { Recipe } from 'src/app/recipe/recipe.model'
import { Ingredient } from 'src/app/shared/ingredient.model'

@Component({
    selector: 'shopping-list-edit',
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.scss',],
})

export class ShoppingListEdit {
    @ViewChild('nameInput') nameInputRef
    @ViewChild('amountInput') amountInputRef
    @Output() ingredientAdded = new EventEmitter<Ingredient>()
    constructor(){}

    onAddIngredient() {
        const ingName = this.nameInputRef.nativeElement.value;
        const ingAmount = this.amountInputRef.nativeElement.value;
        const newIngredient = new Ingredient(ingName, ingAmount);
        this.ingredientAdded.emit(newIngredient);
    }

}