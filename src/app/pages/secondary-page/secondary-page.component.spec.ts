import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondaryPageComponent } from './secondary-page.component';

describe('SecondaryPageComponent', () => {
  let component: SecondaryPageComponent;
  let fixture: ComponentFixture<SecondaryPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondaryPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SecondaryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
