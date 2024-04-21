# Data Binding

In Angular there are four types of data binding techniques:

1. **Interpolation**: It is a one-way data binding technique, where the data is passed from the component to the view. It is denoted by double curly braces `{{ }}`.

2. **Property Binding**: It is a one-way data binding technique, where the data is passed from the component to the view. It is denoted by square brackets `[]`.

3. **Event Binding**: It is a one-way data binding technique, where the data is passed from the view to the component. It is denoted by parentheses `()`.

4. **Two-way Binding**: It is a two-way data binding technique, where the data is passed from the component to the view and vice versa. It is denoted by square brackets and parentheses `[(ngModel)]`.

Let's see each of them with some more details and examples.

## Interpolation

We have already encountered interpolation in our previous examples, even if it wasn't explicitly mentioned.

_welcome-to-angular.component.ts_

```html
<h1 class="welcome-title">
  <!-- Interpolation -->
  {{ message }}
</h1>
```

## Property Binding

Property binding enables the setting of an element's property value and facilitates the transfer of data from a parent component to a child component.

`@Input()` is a decorator that allows the parent component to pass data to the child component.

Modify the `welcome-to-angular.component.ts` file to accept a name as input.

_welcome-to-angular.component.ts_

```typescript
export class WelcomeToAngularComponent {
  @Input() name: string = "User";

  message = "Welcome to Angular Bootcamp!";

  ngOnInit() {
    this.message = `Welcome to Angular Bootcamp, ${this.name}!`;
  }
}
```

_Note that the `name` property is decorated with `@Input()` and has a default value of `'User'`._

After the property is set, the `ngOnInit()` lifecycle hook is called, and the `message` property is updated with the new value.

Running the application will display the message `Welcome to Angular Bootcamp, User!`.

![welcome-user](/src/assets/02-angular-bootcamp-data-binding/02-welcome-to-angular-bootcamp-user.png)

Now, let's bind the `name` property to the `welcome-to-angular` component in the `app.component.html` file.

_app.component.html_

```html
<app-welcome-to-angular [name]="firstName"></app-welcome-to-angular>
```

And set the `firstName` property in the `app.component.ts` file.

_app.component.ts_

```typescript
@Component({
  selector: "app-root",
  standalone: true,
  imports: [WelcomeToAngularComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  title = "02-angular-bootcamp-data-binding";
  firstName = "Davide";
}
```

Therefore, the message "Welcome to Angular Bootcamp, Davide!" will show up.

![welcome-davide](/src/assets/02-angular-bootcamp-data-binding/02-welcome-to-angular-bootcamp-davide.png)

We've achieved successful data transfer from the parent component to the child component through property binding. 🥳

## Event Binding

We can you use event binding to trigger functions in the parent component using the `@Output()` decorator.

First, let's create a new component called `button-click`.

```bash
ng generate component button-click
```

Then modify the `button-click` component to emit an event when the button is clicked.

_button-click.component.ts_

```typescript
export class ButtonClickComponent {
  @Output() buttonClicked = new EventEmitter();

  onClick() {
    this.buttonClicked.emit();
  }
}
```

The `@Output()` decorator is used to create an event emitter that emits an event when the button is clicked.

The `onClick()` function emits the event when the button is clicked.

_button-click.component.html_

```html
<button (click)="onClick()">Click me!</button>
```

Now, let's bind the `buttonClicked` event to the `app-button-click` component in the `app.component.html` file.

_app.component.html_

```html
<app-button-click (buttonClicked)="onButtonClick()"></app-button-click>
```

And create the `onButtonClick()` function in the `app.component.ts` file.

_app.component.ts_

```typescript
@Component({
  selector: "app-root",
  standalone: true,
  imports: [WelcomeToAngularComponent, ButtonClickComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  title = "02-angular-bootcamp-data-binding";
  firstName = "Davide";

  onButtonClick() {
    alert("Button clicked!");
  }
}
```

When the button is clicked, an alert will be displayed with the message "Button clicked!".

![button-clicked](/src/assets/02-angular-bootcamp-data-binding/02-button-clicked.png)

Note that `(click)` acts as the event binding syntax, which listens for click events on the button element. It's worth mentioning that we could have achieved the same outcome by triggering an alert directly from the child component.

However, emitting the event to the parent component provides a more comprehensive example.

## Two-way Binding

Two-way binding is a combination of property binding and event binding. It allows data to flow in both directions, from the component to the view and vice versa.

To demonstrate two-way binding, we'll use the `[(ngModel)]` directive, which is part of the `FormsModule` module.

First, create a new component called `two-way-binding`.

```bash
ng g c two-way-binding
```

Modify the `two-way-binding` component as follow.

_two-way-binding.component.ts_

```typescript
@Component({
  selector: "app-two-way-binding",
  standalone: true,
  imports: [FormsModule],
  templateUrl: "./two-way-binding.component.html",
  styleUrl: "./two-way-binding.component.css",
})
export class TwoWayBindingComponent {
  name = "Davide";
}
```

_two-way-binding.component.html_

```html
<input [(ngModel)]="name" placeholder="Enter your name" />

<p>Your name is: {{ name }}</p>
```

The `[(ngModel)]` directive binds the input element's value to the `name` property.

The `name` property is displayed below the input element using **interpolation**.

As always add the component to the `app.component.html` file and in the imports array of the `app.component.ts` file.

_app.component.ts_

```typescript
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
```

_app.component.html_

```html
<app-welcome-to-angular [name]="firstName"></app-welcome-to-angular>
<!-- <app-button-click (buttonClicked)="onButtonClicked()"></app-button-click> -->
<app-two-way-binding></app-two-way-binding>
```

When you run the application, you'll see an input element where you can enter your name.

![two-way-binding](/src/assets/02-angular-bootcamp-data-binding/02-two-way-binding.gif)

We completed the data binding section. For more information, check the official Angular documentation on [Data Binding](https://angular.io/guide/binding-syntax#data-binding-and-html).

### [➡️ Next section: 03-angular-bootcamp-control-flow](https://github.com/davdifr/angular-bootcamp/tree/03-angular-bootcamp-control-flow)
