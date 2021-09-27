import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { StepActionComponent } from './step-action.component';

describe('StepActionComponent', () => {
  let component: StepActionComponent;
  let fixture: ComponentFixture<StepActionComponent>;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StepActionComponent],
      imports: [IonicModule.forRoot(),]
    }).compileComponents();

    fixture = TestBed.createComponent(StepActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('shuold call the btnClick method', async () => {
    fixture.detectChanges();
    spyOn(component, 'btnClick');
    el = fixture.debugElement.query(By.css('.button')).nativeElement;
    el.click();
    expect(component.btnClick).toHaveBeenCalledTimes(1);
  });
});
