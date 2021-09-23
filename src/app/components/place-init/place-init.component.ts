import { Component, EventEmitter,  Output } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Direction } from 'src/app/shared/direction.enum';
import { PlaceAction } from 'src/app/shared/model/place-action.model';

import { PlaceRobotModalComponent } from '../place-robot-modal/place-robot-modal.component';
import { Location } from 'src/app/shared/model/location.model';
@Component({
  selector: 'app-place-init',
  templateUrl: './place-init.component.html',
})
export class PlaceInitComponent {
  @Output() actionClick = new EventEmitter<PlaceAction>();

  public directions = Direction;
  public modal: any;
  private xLocation: number;
  private yLocation: number;
  private direction: Direction;
  constructor(private modalController: ModalController,) { }

  async presentPlaceRobotModal() {
    this.reset();
    this.modal = await this.modalController.create({
      component: PlaceRobotModalComponent,
    });
    await this.modal.present();
    const modelRes = await this.modal.onWillDismiss();
    this.xLocation = modelRes.data.xLocation;
    this.yLocation = modelRes.data.yLocation;
    this.direction = modelRes.data.direction;
    this.actionClick.emit(new PlaceAction(new Location(this.xLocation, this.yLocation, this.direction)));
  }

  reset(): void {
    this.xLocation = null;
    this.yLocation = null;
    this.direction = null;
  }
}
