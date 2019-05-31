import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/services/pokemon.service';
import { PokeAPI } from 'src/classes/pokemons';

@Component({
  selector: 'app-pokemon-homepage',
  templateUrl: './pokemon-homepage.component.html',
  styleUrls: ['./pokemon-homepage.component.scss']
})
export class PokemonHomepageComponent implements OnInit {
  pokemons: PokeAPI[];

  constructor(
    private pokemonService: PokemonService
    ) { }

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons() {
    this.pokemonService
    .getPokemon()
    .subscribe(
      (data: PokeAPI[]) => this.pokemons = data);
    }

}
