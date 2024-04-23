import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-primary-page',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './primary-page.component.html',
  styleUrl: './primary-page.component.css',
})
export class PrimaryPageComponent {}
