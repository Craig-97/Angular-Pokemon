import { PokemonDetails } from './pokemon-details';

export class Results {
    name: string;
    url: string;
    details: PokemonDetails;

    constructor(
        name: string,
        url: string,
        details?: PokemonDetails
    ) { this.name = name;
        this.url = url;
        this.details = details; }
}

export class PokeAPI {
    count: number;
    next: string;
    results: Results[];

    constructor(
        count: number,
        next: string,
        results: Results[]
    ) {
        this.count = count;
        this.next = next;
        this.results = results; }
}


