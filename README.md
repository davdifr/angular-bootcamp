⚠️ Before proceeding further, we've reorganized our components and services into new directories. All components now reside in `src/app/components`, while the click-counter service has been relocated to `src/app/services`. This revamped structure enhances project organization and provides a clearer understanding of its architecture.

Additionally, it's possible to create a new component directly in the `src/app/components` directory by running the following command:

```bash
ng generate component components/<component-name>
```

# Routing

Routing is a core feature in Angular and allows us to realistically create our SPA (single-page application). SPA means that we can have different routes in our app that don't need to be refreshed in order to be visited. Due to the fact that we reorganized our folders, let's create another one called `pages` where we will put components that serve as a 'page'. This folder should be placed inside `src/app`, of course. Once we are done, let's create two new components: `primary-page` and `secondary-page`.

```bash
ng g c pages/primary-page

ng g c pages/secondary-page
```

We can now clear our `app.component.html` (as we no longer need any of those components) and replace them with a `router-outlet` directive.

_app.component.html_

```html
<router-outlet></router-outlet>
```

The `router-outlet` directive marks the spot in the template where the router should display the components for that outlet. While we can have multiple router-outlets in our app, for now, we will use only one.

If the router module is not already present in `app.component.ts` providers, let's add it (we can also delete the previous import).

_app.component.ts_

```typescript
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-root",
  standalone: true,
  providers: [RouterModule],
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "05-angular-bootcamp-routing";
}
```

Visiting our app right now will result in an empty page. We need to configure our routes in order to display the components we created. Let's open `app.routes.ts` and add the following code:

_app.routes.ts_

```typescript
export const routes: Routes = [
  {
    path: "primary",
    component: PrimaryPageComponent,
  },
  {
    path: "secondary",
    component: SecondaryPageComponent,
  },
  {
    path: "",
    redirectTo: "primary",
    pathMatch: "full",
  },
];
```

`routes` is an array of objects that define the routes in our app.

The `path` property is the URL path that we want to match, while the `component` property is the component that we want to display when the path is matched.

The `redirectTo` property is used to redirect the user to a specific path when the app is loaded. The `pathMatch` property is set to `full` to ensure that the path is matched exactly.

Before seeing the changes in action, we can also consider adding a page for the not-found route. Let's create a new component called not-found-page:

```bash
ng g c pages/not-found-page
```

Then, let's add it to our routes **in the last position** of the array.

_app.routes.ts_

```typescript
{
  path: "**",
  component: NotFoundPageComponent,
}
```

The `**` path is a wildcard route that matches any URL that doesn't match any of the other routes. This is why we add it at the end of the array.

Result looks like this:

![Routing](/src/assets/05-angular-bootcamp-routing/05-routing.gif)

But we haven't accomplished our goal yet. Currently, we're manually changing the URL in the browser, which causes a complete page reload. To navigate between pages without reloading, we need to add a `routerLink` directive to our navigation links.

Change the `primary-page` template to include a link to the secondary page and vice versa.

_primary-page.component.html_

```html
<h1>Primary Page</h1>
<a routerLink="/secondary">Go to Secondary Page</a>
```

_secondary-page.component.html_

```html
<h1>Secondary Page</h1>
<a routerLink="/primary">Go to Primary Page</a>
```

Also, it's necessary to add `RouterModule` to the imports of both components.

Now, when we click on the links, the URL changes, and the components are displayed **without** a page reload.

![routerLink](/src/assets/05-angular-bootcamp-routing/05-routerLink.gif)

_**Small exercise**: Include a link to the not-found-page, which is displayed when the user enters an invalid URL. This link should redirect the user to the primary page._

### [➡️ Next section: 06-angular-bootcamp-http](https://github.com/davdifr/angular-bootcamp/tree/06-angular-bootcamp-http)
