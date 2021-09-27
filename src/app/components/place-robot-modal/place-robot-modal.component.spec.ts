import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { AlertController, IonicModule, ModalController } from '@ionic/angular';
import { PlaceRobotModalComponent } from './place-robot-modal.component';


describe('PlaceRobotModalComponent', () => {
  let component: PlaceRobotModalComponent;
  let fixture: ComponentFixture<PlaceRobotModalComponent>;
  let de: DebugElement;
  let el: HTMLElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PlaceRobotModalComponent],
      imports: [IonicModule.forRoot(), ReactiveFormsModule]
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(PlaceRobotModalComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();

      de = fixture.debugElement.query(By.css('.form'));
      el = de.nativeElement;
    });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('shuold call the placeRobot method', async () => {
    fixture.detectChanges();
    spyOn(component, 'placeRobot');
    el = fixture.debugElement.query(By.css('.button')).nativeElement;
    el.click();
    expect(component.placeRobot).toHaveBeenCalledTimes(1);
  });

  it('form should be invalid', async () => {
    component.form.patchValue({ xLocation: '', yLocation: '', direction: '' })
    expect(component.form.valid).toBeFalsy();
  });

  it('form should be valid', async () => {
    component.form.patchValue({ xLocation: 0, yLocation: 0, direction: 1 })
    expect(component.form.valid).toBeTruthy();
  });
});
