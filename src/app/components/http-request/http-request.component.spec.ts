import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpRequestComponent } from './http-request.component';

describe('HttpRequestComponent', () => {
  let component: HttpRequestComponent;
  let fixture: ComponentFixture<HttpRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpRequestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HttpRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
