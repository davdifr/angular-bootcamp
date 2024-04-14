# Components

Components are the building blocks of a web application. They are **reusable** and can be used in different parts of the application.

Create a new component by running the following command:

```bash
ng generate component welcome-to-angular
```

This command will create a new folder in the `src/app` directory with the name `welcome-to-angular`. Inside this folder, you will find the following files:

- `welcome-to-angular.component.css`
- `welcome-to-angular.component.html`
- `welcome-to-angular.component.spec.ts`
- `welcome-to-angular.component.ts`

Note that you can also create a component using the shorthand `ng g c welcome-to-angular`.

## Modify the component

Suppose we want to create a component that displays a welcome message linked to a variable in our TypeScript code, we would modify the component in this way:

_welcome-to-angular.component.ts_

```typescript
export class WelcomeToAngularComponent {
  message = "Welcome to Angular Bootcamp!";
}
```

_welcome-to-angular.component.html_

```html
<h1 class="welcome-title">{{ message }}</h1>
```

_welcome-to-angular.component.css_

```css
.welcome-title {
  font-size: 42px;
  color: #333;
}
```

## Display the component

To display the component in the application, we need to add the **selector** of the component to the `app.component.html` file:

_app.component.html_

```html
<app-welcome-to-angular></app-welcome-to-angular>
```

But is not enough! We need to import the component in the `app.component.ts` file:

_app.component.ts_

```typescript
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [WelcomeToAngularComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
```

Restart the application and you should see the welcome message displayed in the browser.
![welcome-to-angular-component](src/assets/01-angular-bootcamp-components/01-welcome-to-angular-component.png)
