import { Component } from '@angular/core';
import { WelcomeToAngularComponent } from './welcome-to-angular/welcome-to-angular.component';
import { ButtonClickComponent } from './button-click/button-click.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { Person } from './models/person.interface';

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
  showTwoWayBinding = false;

  peopleList: Person[] = [
    {
      name: 'John',
      age: 30,
    },
    {
      name: 'Jane',
      age: 25,
    },
    {
      name: 'Doe',
      age: 28,
    },
  ];

  toggleTwoWayBinding() {
    this.showTwoWayBinding = !this.showTwoWayBinding;
  }

  onButtonClicked() {
    alert('Button clicked!');
  }
}
