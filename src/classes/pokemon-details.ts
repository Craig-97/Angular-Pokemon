export class PokemonDetails {
  name: string;
  id: number;
  sprites: Sprites;

  constructor(name: string, id: number, sprites: Sprites) {
    this.name = name;
    this.id = id;
    this.sprites = sprites;
  }
}

export class Sprites {
  front_default: string;
  constructor(front_default: string) {
    this.front_default = front_default;
  }
}
