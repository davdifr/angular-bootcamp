import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HttpRequestComponent } from "./components/http-request/http-request.component";

@Component({
    selector: "app-root",
    standalone: true,
    imports: [RouterModule, HttpRequestComponent],
    templateUrl: "./app.component.html",
    styleUrl: "./app.component.css",
})
export class AppComponent {
    title = "05-angular-bootcamp-routing";
}
