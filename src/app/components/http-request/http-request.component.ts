import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-http-request',
  standalone: true,
  imports: [],
  templateUrl: './http-request.component.html',
  styleUrl: './http-request.component.css',
})
export class HttpRequestComponent {
  apiUrl = 'https://api.tvmaze.com/shows';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get(this.apiUrl).subscribe({
      next: (data) => console.table(data),
      error: (err) => console.error(err),
      complete: () => console.log('Request completed'),
    });
  }
}
