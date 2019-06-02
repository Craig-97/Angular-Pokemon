import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public search: string;
  public filter: any;

  newPokemonSearch(search: string): void {
    if (this.search !== search) {
      this.search = search;
    }
  }

  newTypeSelected(filter: string): void {
    if (this.filter !== filter) {
      this.filter = filter;
    }
  }
}
