import { Direction } from '../direction.enum';
import { Location } from './location.model';
import { TableArea } from './table-area.model';

export class Robot {
    public currentLocation: Location;

    constructor(public tableArea: TableArea) { }

    place(location: Location): boolean {
        if (this.tableArea.isPlaceValid(location)) {
            this.currentLocation = location;
            return true;
        }
        return false;
    }

    move(): boolean {
        if (this.tableArea.isMoveValid(this.currentLocation)) {
            switch (this.currentLocation.direction) {
                case Direction.North:
                    this.currentLocation.y++;
                    break;
                case Direction.East:
                    this.currentLocation.x++;
                    break;
                case Direction.South:
                    this.currentLocation.x--;
                    break;
                case Direction.West:
                    this.currentLocation.y--;
                    break;
            }
            return true;
        }
        return false;
    }

    turnFaceLeft(): void {
        this.setDirection(false);
    }

    turnFaceRight(): void {
        this.setDirection(true);
    }

    report(): string {
        return `X: ${this.currentLocation.x}, Y: ${this.currentLocation.y}, Direction: ${Direction[this.currentLocation.direction]}`;
    }

    private setDirection(incrementClockWise: boolean): void {
        if (incrementClockWise) {
            if (this.currentLocation.direction == Direction.West) {
                this.currentLocation.direction = Direction.North;
            }
            else {
                this.currentLocation.direction++;
            }
        }
        else {
            if (this.currentLocation.direction == Direction.North) {
                this.currentLocation.direction = Direction.West;
            }
            else {
                this.currentLocation.direction--;
            }
        }

    }
}

