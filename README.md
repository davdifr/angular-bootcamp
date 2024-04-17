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

Therefore, the message "Welcome to Angular Bootcamp, Davide!" will show up. We've achieved successful data transfer from the parent component to the child component through property binding.

![welcome-davide](/src/assets/02-angular-bootcamp-data-binding/02-welcome-to-angular-bootcamp-davide.png)

## Event Binding
