import { Component } from '@angular/core';
import { WelcomeToAngularComponent } from './welcome-to-angular/welcome-to-angular.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [WelcomeToAngularComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = '01-angular-bootcamp-components';
}
