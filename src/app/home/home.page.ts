import { Component } from '@angular/core';
import { ActionType } from '../shared/action-type.enum';
import { Action } from '../shared/model/action.model';
import { ActionService } from '../shared/service/action.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
})
export class HomePage {
  public actionTypes = ActionType;
  constructor(public actionService: ActionService) { }
 
  actionClicked(event: Action): void {
    this.actionService.actions.push(event);
  }

  //Peform actions to display result
  performActions(): void {
    this.actionService.executeactions();
  }
}
