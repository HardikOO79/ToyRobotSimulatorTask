import { Injectable } from '@angular/core';
import { Action } from '../model/action.model';
import { Robot } from '../model/robot.model';
import { TableArea } from '../model/table-area.model';
import { PlaceAction } from '../model/place-action.model';
import { ActionType } from '../action-type.enum';
@Injectable({
    providedIn: 'root'
})
export class ActionService {

    public actions: Action[];
    public reports: string[];

    private robotPlaced: boolean;

    constructor(public playArea: TableArea, public robot: Robot) {
        this.actions = [];
        this.reports = [];
        this.robotPlaced = false;
    }

    executeactions = (): boolean => {

        if (this.actions.length) {


            //if the robot has not been placed, we need to make sure first action is a place action
            if (!this.robotPlaced) {

                let firstValidPlaceActionIndex: number = 0;

                const placeActions = this.actions.filter(item => item.actionType == ActionType.Place);

                if (!placeActions.length) {
                    return false;
                }

                for (let placeAction of placeActions) {
                    let pc = placeAction as PlaceAction;
                    if (this.robot.place(pc.location)) {
                        this.robotPlaced = true;
                        firstValidPlaceActionIndex = this.actions.indexOf(placeAction, 0);
                        break;
                    }
                }

                if (!this.robotPlaced) {
                    return false;
                }

                //filter to remove all the actions upto and including the first valid place action
                this.actions = this.actions.filter(action => this.actions.indexOf(action) > firstValidPlaceActionIndex)
            }

            if (this.actions) {
                this.actions.forEach((action) => {
                    this.executeAction(action);
                });
            }

            //clear the actions now they have been executed 
            this.actions = [];

            return true;
        }
        return false;
    }
    // finding functions for actions 
    private executeAction(action: Action): void {
        switch (action.actionType) {
            case ActionType.Place:
                let placeAction = action as PlaceAction;
                this.robot.place(placeAction.location);
                break;
            case ActionType.Left:
                this.robot.turnFaceLeft();
                break;
            case ActionType.Right:
                this.robot.turnFaceRight();
                break;
            case ActionType.Move:
                this.robot.move();
                break;
            case ActionType.Report:
                this.reports.push(this.robot.report());
                break;
        }
    }
}
