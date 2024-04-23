import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ClickCounterService {
  private count = 0;

  constructor() {}

  increment() {
    this.count++;
  }

  getCount() {
    return this.count;
  }
}
