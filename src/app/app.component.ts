import { PokeAPI, Results } from './../interfaces';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public search: string;
  public typeFilter: string;
  public pokemons: Array<Results>;
  public abilityFilter: Array<string>;

  /**
   *  Called when search input changes
   */
  newPokemonSearch(search: string): void {
    if (this.search !== search) {
      this.search = search;
    }
  }

  /**
   * Called when header type selection changes
   */
  newTypeSelected(filter: string): void {
    if (this.typeFilter !== filter) {
      this.typeFilter = filter;
    }
  }

  /**
   * Called when header ability selection changes
   */
  newAbilitiesSelected(abilities: Array<string>): void {
    if (this.abilityFilter !== abilities) {
      this.abilityFilter = abilities;
    }
  }

  /**
   * Called when homepage emits pokemons
   */
  exportPokemons(pokemons: Array<Results>): void {
    if (this.pokemons !== pokemons) {
      this.pokemons = pokemons;
    }
  }
}
