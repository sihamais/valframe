import { Type } from './type.model';

export class Node{
    constructor(public id: number,
        public child: number[],
        public parent: number,
        public type: Type){}
}