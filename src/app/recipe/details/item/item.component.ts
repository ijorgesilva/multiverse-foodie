import { Component, Input } from '@angular/core'

@Component({
    selector: 'recipe-item',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.scss',],
})

export class RecipeItem{
    @Input() name: string = ''
    @Input() description: string = ''
    @Input() imagePath: string = ''

    constructor(){}
}