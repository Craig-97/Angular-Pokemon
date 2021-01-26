import { HttpParams } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogConfig, PageEvent } from "@angular/material";
import { PokeAPI, PokemonDetails, Results, TYPE_COLOURS } from 'src/interfaces';
import { PokemonService } from 'src/services/pokemon.service';
import { PokemonDetailDialogComponent } from '../pokemon-detail-dialog/pokemon-detail-dialog.component';

@Component({
  selector: 'app-pokemon-homepage',
  templateUrl: './pokemon-homepage.component.html',
  styleUrls: ['./pokemon-homepage.component.scss']
})
export class PokemonHomepageComponent implements OnInit {
  @Output() exportPokemons = new EventEmitter();
  pokemonsLoaded: boolean;
  pokemons: PokeAPI;
  query: string;
  abilityFilters: Array<string>;
  typeFilters: string;

  @Input() set search(newSearch: string) {
    if (newSearch !== this.query) {
      this.query = newSearch;
    }
  }

  @Input() set typeFilter(type: string) {
    if (type !== this.typeFilter) {
      this.typeFilters = type;
    }
  }

  @Input() set abilityFilter(abilities: Array<string>) {
    if (abilities !== this.abilityFilters) {
      this.abilityFilters = abilities;
    }
  }

  public lengthPage: number;
  public pageSize: number;  

  public previousPage: string;
  public nextPage: string;

  constructor(private pokemonService: PokemonService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.pokemonsLoaded = false;
    this.getPokemons();
  }

  getParamValueQueryString(paramName: string, urlToCheck: string) {
    const url = urlToCheck;
    let paramValue;
    if (url.includes('?')) {
      const httpParams = new HttpParams({ fromString: url.split('?')[1] });
      paramValue = httpParams.get(paramName);
    }
    return paramValue;
  }

  getPaginatorData(event: PageEvent): void {
    if (event.pageIndex > event.previousPageIndex) {
      this.getPokemons(this.getParamValueQueryString('limit', this.nextPage), this.getParamValueQueryString('offset', this.nextPage));
    } else {
      this.getPokemons(this.getParamValueQueryString('limit', this.previousPage), this.getParamValueQueryString('offset', this.previousPage));
    }
  }

  /**
   * Loads in all 151 Original pokemon and gets
   * their details and species details
   */
  getPokemons(limit?: number, offset?: number): void {
    this.pokemonService.getPokemon(limit, offset).subscribe((data: PokeAPI) => {
      this.pokemons = data;

      if (this.pokemons.results && this.pokemons.results.length) {
        
        this.lengthPage = this.pokemons.count;
        this.nextPage = this.pokemons.next;
        this.previousPage = this.pokemons.previous;
        this.pageSize = this.getParamValueQueryString('offset', this.nextPage);
        // get pokemon details for every pokemon
        this.pokemons.results.forEach(pokemon => {
          // set pokemon id
          pokemon.id = pokemon.url.split('/')[
            pokemon.url.split('/').length - 2
          ];

          this.getPokemonDetails(pokemon);
        });
        window.scroll(0,0);
      }
    });
  }

  /**
   * Gets and sets a pokemons details
   */
  getPokemonDetails(pokemon: Results): void {
    this.pokemonService
      .getPokemonDetails(pokemon.name)
      .subscribe((details: PokemonDetails) => {
        pokemon.details = details;
        // when last pokemon details have been loaded
        // send pokemons to header component
        if (pokemon.id === this.pageSize.toString()) {
          this.pokemonsLoaded = true;
          this.exportPokemons.emit(this.pokemons.results);
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

  public openDialogDetails(pokemon: Results) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '550px',
    dialogConfig.height = '800px',
    
    dialogConfig.data = {
      title: 'Pokemon detail for: ' + pokemon.name,
      pokemon: pokemon
    };
    this.dialog.open(PokemonDetailDialogComponent, dialogConfig);
  }
}
