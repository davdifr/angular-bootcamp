# Services and Dependency Injection (DI)

A service is a class that can be used to share data or logic across different parts of the application.
It is a good practice to use services to encapsulate logic and make it reusable in any component.

Ideally, a component should only contain logic that is related to the view and should delegate any other logic to a service.

Let's create a simple service that will count the number of times a button is clicked.

First, let's create a new service using the Angular CLI:

```bash
ng generate service click-counter
```

Notice that `click-counter.service.ts` contains an `@Injectable` decorator. This decorator tells Angular that this class can be used in the DI system.

The metadata, `providedIn: 'root'`, tells Angular to provide the service in the root injector, that means that the service will be available to all parts of the application.

_More about provider can be found [here](https://angular.io/guide/providers)._

```typescript
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
```
