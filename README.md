# Angular Bootcamp - HTTP

## HttpClient Service

To use the HttpClient service, we need to include `provideHttpClient()` in the providers array in the `app.config.ts` file.

```typescript
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient()],
};
```

`provideHttpClient()` configures Angular's HttpClient service to be available for injection.

The HttpClient service is a part of the `@angular/common/http` package. It is a simplified API for making HTTP requests and is based on Observables.

## Making a GET Request

To make a **GET** request, we need to inject the HttpClient service into a component or service. We can then use the `get()` method to make a request.

The `get()` method takes the URL of the resource to fetch as an argument and returns an **Observable**.

_An Observable is a stream of data that can be observed over time. It can emit multiple values over time, and it can be cancelled. Observables are lazy, meaning they do not start emitting data until they are **subscribed** to._

Create a new component called `http-request.component.ts`:

```typescript
export class HttpRequestComponent {
  apiUrl = "https://api.tvmaze.com/shows";

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get(this.apiUrl).subscribe({
      next: (data) => console.table(data),
      error: (err) => console.error(err),
      complete: () => console.log("Request completed"),
    });
  }
}
```

_We are making a GET request to the TVMaze API to fetch a list of TV shows._

The `subscribe()` method takes an object with three properties: `next`, `error`, and `complete`. The `next` property is a callback function that is called when the response is received. The `error` property is a callback function that is called if an error occurs. The `complete` property is a callback function that is called when the request is completed.

After adding the component to our `AppComponent` file, we can see the data in the console.

![http-request](/src/assets/06-angular-bootcamp-http/06-http-get-request.png)

In this case we don't need to unsubscribe from the [observable](https://angular.io/guide/observables-in-angular) because the HttpClient service automatically unsubscribes when the request is completed.

In general, it is a **good practice** to unsubscribe from observables to **avoid memory leaks**. We can do this by storing the subscription in a variable and calling the `unsubscribe()` method on it when we are done with the observable.

## Other request methods

The HttpClient service provides methods for making other types of requests, such as `post()`, `put()`, `delete()`, and `patch()`. These methods take the URL and the data to send as arguments. 👌
