import { Component, EventEmitter, Output } from '@angular/core'

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss',],
})

export class AppHeader{
    @Output() currentPage = new EventEmitter<string>()
    constructor(){}

    onNavigate(page: string){
        this.currentPage.emit(page)
    }
}