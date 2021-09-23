import { Direction } from '../direction.enum';

// For finding current and calculating new location
export class Location {
    constructor(public x: number, public y: number, public direction: Direction) { }

}
