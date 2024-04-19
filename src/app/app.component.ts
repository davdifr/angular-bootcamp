import { Component } from '@angular/core';
import { WelcomeToAngularComponent } from './welcome-to-angular/welcome-to-angular.component';
import { ButtonClickComponent } from './button-click/button-click.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    WelcomeToAngularComponent,
    ButtonClickComponent,
    TwoWayBindingComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = '02-angular-bootcamp-data-binding';
  firstName = 'Davide';

  onButtonClicked() {
    alert('Button clicked!');
  }
}
