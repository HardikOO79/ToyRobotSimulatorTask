import { ActionType } from '../action-type.enum';
import { Location } from "./location.model";
import { Action } from './action.model';
export class PlaceAction extends Action{
    constructor(public location: Location) {
        super(ActionType.Place);
    }
}
