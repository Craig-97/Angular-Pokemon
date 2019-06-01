import { Component, OnInit, Input } from '@angular/core';
import { TYPE_COLOURS } from 'src/classes/interfaces';
import { PokeAPI } from 'src/classes/pokemons';
import { PokemonService } from 'src/services/pokemon.service';
import { PokemonDetails } from './../../classes/pokemon-details';

@Component({
  selector: 'app-pokemon-homepage',
  templateUrl: './pokemon-homepage.component.html',
  styleUrls: ['./pokemon-homepage.component.scss']
})
export class PokemonHomepageComponent implements OnInit {
  pokemons: PokeAPI;
  query: string;

  @Input() set search(newSearch: string) {
    if (newSearch !== this.query) {
      this.query = newSearch;
    }
  }

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons() {
    this.pokemonService.getPokemon().subscribe((data: PokeAPI) => {
      this.pokemons = data;

      if (this.pokemons.results && this.pokemons.results.length) {
        // get pokemon details for every pokemon
        this.pokemons.results.forEach(pokemon => {

          // set pokemon id
          pokemon.id = pokemon.url.split('/')[pokemon.url.split('/').length - 2];

          this.pokemonService
            .getPokemonDetails(pokemon.name)
            .subscribe((details: PokemonDetails) => {
              pokemon.details = details;
            });
        });
      }
    });
  }

  // WILL BE ADDED TO DIALOG TO GET FURTHER INFO
  getPokemonSpeciesDetails(pokemon) {
    this.pokemonService
    .getPokemonSpecies(pokemon.name)
    .subscribe((species: any) => {
      const entries = species.flavor_text_entries;
      if (entries) {
        entries.some(flavor => {
          if (flavor.language.name === 'en') {
            pokemon.description = flavor.flavor_text;
          }
        });
      }
    });
  }

  /**
   * returns colour based on type mapped
   * in TYPE_COLOURS interface
   */
  _getTypeColour(type: string): string {
    if (type) {
      return '#' + TYPE_COLOURS[type];
    }
  }
}
