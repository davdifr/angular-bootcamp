import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-secondary-page',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './secondary-page.component.html',
  styleUrl: './secondary-page.component.css',
})
export class SecondaryPageComponent {}
