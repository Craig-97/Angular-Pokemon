import { PokemonDetails } from './pokemon-details';

export class Results {
    name: string;
    url: string;
    details: PokemonDetails;
    description: string;

    constructor(
        name: string,
        url: string,
        details?: PokemonDetails,
        description?: any
    ) { this.name = name;
        this.url = url;
        this.details = details;
        this.description = description; }
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


