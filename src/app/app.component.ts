import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public search: string;

  newPokemonSearch(search: string) {
    if (this.search !== search) {
      this.search = search;
    }
  }
}
