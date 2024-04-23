import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WelcomeToAngularComponent } from './components/welcome-to-angular/welcome-to-angular.component';
import { ButtonClickComponent } from './components/button-click/button-click.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = '05-angular-bootcamp-routing';
}
