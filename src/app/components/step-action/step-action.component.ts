import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActionType } from 'src/app/shared/action-type.enum';
import { Action } from 'src/app/shared/model/action.model';

@Component({
  selector: 'app-step-action',
  templateUrl: './step-action.component.html',
})
export class StepActionComponent implements OnInit {
  private _actionType: ActionType;

  get actionType(): ActionType {
    return this._actionType;
  }

  @Input()
  set actionType(actionType: ActionType) {
    this._actionType = actionType;
    this.actionName = ActionType[this._actionType];
  }

  @Output() actionClick = new EventEmitter<Action>();

  public actionName: string;

  constructor() { }

  ngOnInit() { }

  public btnClick() {
    this.actionClick.emit(new Action(this.actionType));
  }
}
