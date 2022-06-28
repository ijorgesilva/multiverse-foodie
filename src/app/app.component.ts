import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentPage: string = 'recipes'
  title = 'shopping-recipe';

  changePage(page: string){
    this.currentPage = page
    console.log(this.currentPage)
  }
}
