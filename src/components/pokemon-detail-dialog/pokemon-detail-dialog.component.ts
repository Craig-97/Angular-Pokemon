import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Results, TYPE_COLOURS } from 'src/interfaces';
import { PokemonService } from 'src/services/pokemon.service';

@Component({
  selector: 'app-pokemon-detail-dialog',
  templateUrl: './pokemon-detail-dialog.component.html',
  styleUrls: ['./pokemon-detail-dialog.component.scss']
})
export class PokemonDetailDialogComponent implements OnInit {

  public form: FormGroup;
  public title: string;
  public pokemon: Results;

  constructor(
      private dialogRef: MatDialogRef<PokemonDetailDialogComponent>,
      private pokemonService: PokemonService,
      @Inject(MAT_DIALOG_DATA) data) {
      this.title = data.title;
      this.pokemon = data.pokemon;
  }

  ngOnInit() {
    this.getPokemonEvolutions(this.pokemon);
  }

  /**
   * Gets and sets pokemon evolutions
   */
  getPokemonEvolutions(pokemon: Results): void {
    this.pokemonService
      .getPokemonSpecies(pokemon.id)
      .subscribe((chainId: any) => {
        this.pokemonService
          .getPokemonEvolutions(chainId)
          .subscribe((evolutions: any) => {
            let evoChain = [];
            let evoData = evolutions.chain;

            do {
              let evoDetails = evoData['evolution_details'][0];

              evoChain.push({
                "species_name": evoData.species.name,
                "min_level": !evoDetails ? 1 : evoDetails.min_level,
                "trigger_name": !evoDetails ? null : evoDetails.trigger.name,
                "item": !evoDetails ? null : evoDetails.item
              });

              evoData = evoData['evolves_to'][0];
            } while (!!evoData && evoData.hasOwnProperty('evolves_to'));
            if (!!evoChain) {
              pokemon.evolution = evoChain;
            }
          });
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

  close() {
    this.dialogRef.close();
  }
}
