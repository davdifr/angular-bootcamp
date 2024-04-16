import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome-to-angular',
  standalone: true,
  imports: [],
  templateUrl: './welcome-to-angular.component.html',
  styleUrl: './welcome-to-angular.component.css',
})
export class WelcomeToAngularComponent {
  message = 'Welcome to Angular Bootcamp!';

  constructor() {
    console.log(`constructor(): ${this.message}`);
  }

  ngOnInit() {
    this.message = 'Welcome from ngOnInit!';
    console.log(`ngOnInit(): ${this.message}`);
  }
}
