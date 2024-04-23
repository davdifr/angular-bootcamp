import { Component } from '@angular/core';
import { Person } from './models/person.interface';
import { FormsModule } from '@angular/forms';
import { ClickCounterService } from './services/click-counter/click-counter.service';
import { WelcomeToAngularComponent } from './components/welcome-to-angular/welcome-to-angular.component';
import { ButtonClickComponent } from './components/button-click/button-click.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,
    WelcomeToAngularComponent,
    ButtonClickComponent,
    TwoWayBindingComponent,
    FormsModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = '05-angular-bootcamp-routing';
}
