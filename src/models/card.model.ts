export class Card {
    constructor(
        public id: number,
        public title: string,
        public content?: string[],
        public childs?: Card[]
        ) { }
}
