import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { PlaceInitComponent } from '../components/place-init/place-init.component';
import { StepActionComponent } from '../components/step-action/step-action.component';
import { ActionService } from '../shared/service/action.service';
import { ActionServiceFactory } from '../shared/service/action-service-factory';
import { PlaceRobotModalComponent } from '../components/place-robot-modal/place-robot-modal.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, PlaceInitComponent, StepActionComponent,PlaceRobotModalComponent,],
  providers: [{ provide: ActionService, useFactory: ActionServiceFactory }]
})
export class HomePageModule { }
