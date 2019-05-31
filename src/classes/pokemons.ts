export class Results {
    name: string;
    url: string;

    constructor(
        name: string,
        url: string
    ) { this.name = name;
        this.url = url; }
}

export class PokeAPI {
    count: number;
    next: string;
    results: Results;
    constructor(
        count: number,
        next: string,
        results: Results
    ) {
        this.count = count;
        this.next = next;
        this.results = results; }
}


