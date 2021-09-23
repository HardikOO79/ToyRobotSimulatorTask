import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-place-robot-modal-modal',
  templateUrl: './place-robot-modal.component.html',
})
export class PlaceRobotModalComponent implements OnInit {

  form: FormGroup;
  constructor(
    private modalController: ModalController,
    private alertController: AlertController,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      xLocation: ['', [Validators.required]],
      yLocation: ['', [Validators.required]],
      direction: ['', [Validators.required]],
    });
  }

  async placeRobot() {
    if (this.form.valid) {
      this.modalController.dismiss(this.form.value);
    } else {
      const alert = await this.alertController.create({
        header: 'Alert',
        subHeader: 'All fields are mandatory',
        message: 'Please select X,Y and Direction',
        buttons: ['OK']
      });

      await alert.present();
    }

  }
}
