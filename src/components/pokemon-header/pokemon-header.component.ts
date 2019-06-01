import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-pokemon-header',
  templateUrl: './pokemon-header.component.html',
  styleUrls: ['./pokemon-header.component.scss']
})
export class PokemonHeaderComponent {
  @Output() searchChange = new EventEmitter();
  search: string;

  constructor() { }

  searchEvent() {
    this.searchChange.emit(this.search);
  }
}
