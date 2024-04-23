import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeToAngularComponent } from './welcome-to-angular.component';

describe('WelcomeToAngularComponent', () => {
  let component: WelcomeToAngularComponent;
  let fixture: ComponentFixture<WelcomeToAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WelcomeToAngularComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WelcomeToAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
