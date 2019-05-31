import { Component, OnInit } from '@angular/core';
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
          this.pokemonService
            .getPokemonDetails(pokemon.name)
            .subscribe((details: PokemonDetails) => {
              pokemon.details = details;
            });
        });
      }
    });
  }
}
