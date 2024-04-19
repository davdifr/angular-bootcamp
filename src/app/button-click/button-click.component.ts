import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-button-click',
  standalone: true,
  imports: [],
  templateUrl: './button-click.component.html',
  styleUrl: './button-click.component.css',
})
export class ButtonClickComponent {
  @Output() buttonClicked = new EventEmitter();

  onClick() {
    this.buttonClicked.emit();
  }
}
