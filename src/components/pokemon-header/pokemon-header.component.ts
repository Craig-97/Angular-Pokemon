import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-pokemon-header',
  templateUrl: './pokemon-header.component.html',
  styleUrls: ['./pokemon-header.component.scss']
})
export class PokemonHeaderComponent {
  @Output() searchChange = new EventEmitter();
  @Output() typeSelected = new EventEmitter();
  search: string;
  currentType: any;

  types: Array<any> = [
    { type: 'Bug' }, { type: 'Dark' }, { type: 'Dragon' },
    { type: 'Electric' }, { type: 'Fairy' }, { type: 'Fighting' },
    { type: 'Fire' }, { type: 'Flying' }, { type: 'Ghost' },
    { type: 'Grass' }, { type: 'Ground' }, { type: 'Normal' },
    { type: 'Poison' }, { type: 'Psychic' }, { type: 'Steel' },
    { type: 'Water' }
  ];

  constructor() {}

  searchEvent(search): void {
    // check for cleared search
    if (search === '') {
      this.search = search;
    }
    this.searchChange.emit(this.search);
  }

  onTypeSelected(): void {
    if (this.currentType && this.currentType.type) {
        this.typeSelected.emit(this.currentType.type);
    } else {
      this.typeSelected.emit('');
    }
  }
}
