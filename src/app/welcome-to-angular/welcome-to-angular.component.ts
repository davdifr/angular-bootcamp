import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-welcome-to-angular',
  standalone: true,
  imports: [],
  templateUrl: './welcome-to-angular.component.html',
  styleUrl: './welcome-to-angular.component.css',
})
export class WelcomeToAngularComponent {
  @Input() name: string = 'User';

  message = `Welcome to Angular Bootcamp ${this.name}!`;
}
