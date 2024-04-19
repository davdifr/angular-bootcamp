# Control Flow

Angular provide `@if`, `@else`, `@for`, `@empty` and `@switch` blocks to control the flow of the template rendering.
Those blocks can be used to conditionally render parts of the template, iterate over a list of items, or switch between multiple cases.

## `@if` and `@else`

In order to see how `@if` and `@else` work, let's modify the `app.component.html` file as follows:

```html
@if (showTwoWayBinding) {
<app-two-way-binding></app-two-way-binding>
} @else {
<p>Two way binding component is hidden</p>
}

<button (click)="toggleTwoWayBinding()">Toggle Two Way Binding</button>
```

As you can see, we have a button that toggles the `showTwoWayBinding` property. When the property is `true`, the `app-two-way-binding` component is rendered. Otherwise, a simple paragraph is displayed.

In the `app.component.ts` file, we need to add the following code:

```typescript
export class AppComponent {
  showTwoWayBinding = true;

  toggleTwoWayBinding() {
    this.showTwoWayBinding = !this.showTwoWayBinding;
  }
}
```

Result looks like this:
![if-else](/src/assets/03-angular-bootcamp-control-flow/03-if-and-else-blocks.gif)

## `@for` and `empty`

To demonstrate the functionality of @for, we'll first create a new interface to define a Person object:

_models/person.interface.ts_

```typescript
export interface Person {
  name: string;
  age: number;
}
```

_Note that we have created a new folder called `models` to store our interfaces inside src/app._

Then, let's modify the `app.component.ts` file and add the following code:

```typescript
peopleList: Person[] = [
    {
      name: 'John',
      age: 30,
    },
    {
      name: 'Jane',
      age: 25,
    },
    {
      name: 'Doe',
      age: 28,
    },
  ];
```

We can now use the `@for` block in the `app.component.html` file to iterate over the `peopleList` array and print the name and age of each person thanks to interpolation:

```html
@for (person of peopleList; track $index) {
<p>{{ person.name }} is {{ person.age }} years old</p>
}
```

The `track` keyword is used to improve the performance of the rendering process. It allows Angular to track the changes in the array and update only the elements that have changed. Check other contextual variables [here](https://angular.io/guide/control_flow#index-and-other-contextual-variables).

![for](/src/assets/03-angular-bootcamp-control-flow/03-for-block.png)

The `@for` block allows iteration over any collection, but `Arrays` provide the **most efficient performance**.

One more thing to note is that in case of an empty array, the `@for` block will not render anything and we can use `@empty` block to display a message:

```html
@for (person of peopleList; track $index) {
<p>{{ person.name }} is {{ person.age }} years old</p>
} @empty {
<p>No people found</p>
}
```

## `@switch`

The `@switch` block is used to switch between multiple cases.

The value of the conditional expression is compared to the case expression using the `===` operator.

Let's demonstrate this with an example.

_app.component.ts_

```typescript
color: string = "";
```

Add a select element to the `app.component.html` file and the `@switch` block to display a message based on the selected color:

_app.component.html_

```html
<h2>Pick your favorite color</h2>
<select [(ngModel)]="color">
  <option value="red">Red</option>
  <option value="blue">Blue</option>
  <option value="green">Green</option>
  <option value="yellow">Yellow</option>
</select>
```

Note that we are using `[(ngModel)]` to bind the selected value to the `color` property.

```html
@switch(color) { @case ('red') {
<p style="color: red">You picked red</p>
} @case ('blue') {
<p style="color: blue">You picked blue</p>
} @case ('green') {
<p style="color: green">You picked green</p>
} @case ('yellow') {
<p style="color: yellow">You picked yellow</p>
} @default {
<p>Please pick a color</p>
} }
```

_Note that the `@default` block is optional and will be rendered if none of the cases match._

Result looks like this:
![switch](/src/assets/03-angular-bootcamp-control-flow/03-switch-block.gif)

### [➡️ Next section: 04-angular-bootcamp-services-and-DI](https://github.com/davdifr/angular-bootcamp/tree/03-angular-bootcamp-services-and-DI)
