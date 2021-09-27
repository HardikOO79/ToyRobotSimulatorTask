import { CommonModule } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { PlaceInitComponent } from './place-init.component';

describe('PlaceInitComponent', () => {
  let component: PlaceInitComponent;
  let fixture: ComponentFixture<PlaceInitComponent>;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PlaceInitComponent],
      imports: [IonicModule.forRoot(), CommonModule, ]
    }).compileComponents();

    fixture = TestBed.createComponent(PlaceInitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('shuold call the presentPlaceRobotModal method', async () => {
    fixture.detectChanges();
    spyOn(component, 'presentPlaceRobotModal');
    el = fixture.debugElement.query(By.css('.button')).nativeElement;
    el.click();
    expect(component.presentPlaceRobotModal).toHaveBeenCalledTimes(1);
  });
});
