# Overview

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.3.

## Default project structure

```
src/
├── app/
│   ├── app.component.html
│   ├── app.component.css
│   ├── app.component.spec.ts
│   ├── app.component.ts
│   ├── app.config.ts
│   └── app.routes.ts
├── assets/
├── favicon.ico
├── index.html
├── main.ts
└── styles.css
```

### The AppComponent

App component is the root component of the application. It is the first component loaded in the application. It is the **parent component of all other components**.

## Run the application

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

Something like this will be displayed in the browser:
![default-app](src/assets/00-angular-bootcamp-overview/00-default-app-overview.png)

The content shown in the browser is coming from the `app.component.html` file. Let's change the content of the `app.component.html` file to see the changes in the browser.

For example, change the content of the `app.component.html` file to:

```html
<h1>Hello Angular Bootcamp!</h1>
```

![hello-angular-bootcamp](src/assets/00-angular-bootcamp-overview/00-hello-angular-bootcamp.png)

We can style the content using CSS.
For example, change the content of the `app.component.css` file to:

```css
h1 {
  color: red;
}
```

![hello-angular-bootcamp](src/assets/00-angular-bootcamp-overview/00-hello-angular-bootcamp-red.png)

Note that there is a `styles.css` file in the `src` folder. This file is used to add global styles to the application. **The styles added in this file will be applied to all the components in the application**.

### [Next section: 01-angular-bootcamp-components](https://github.com/davdifr/angular-bootcamp/tree/01-angular-bootcamp-components)
