import { CommonModule } from '@angular/common';
import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { PlaceInitComponent } from '../components/place-init/place-init.component';
import { PlaceRobotModalComponent } from '../components/place-robot-modal/place-robot-modal.component';
import { StepActionComponent } from '../components/step-action/step-action.component';
import { ActionServiceFactory } from '../shared/service/action-service-factory';
import { ActionService } from '../shared/service/action.service';

import { HomePage } from './home.page';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomePage, PlaceInitComponent, StepActionComponent, PlaceRobotModalComponent,],
      imports: [CommonModule,
        FormsModule,
        ReactiveFormsModule,
        IonicModule.forRoot(),
      ],
      providers: [{ provide: ActionService, useFactory: ActionServiceFactory }]
    }).compileComponents();


    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should find the ion-title with fixture.debugElement.query(By.css)', () => {
    const debugElement: DebugElement = fixture.debugElement;
    const ele = debugElement.query(By.css('ion-title'));
    const htmlele: HTMLElement = ele.nativeElement;
    expect(htmlele.textContent.trim()).toEqual('Toy-Robot Simulator');
  });
});
