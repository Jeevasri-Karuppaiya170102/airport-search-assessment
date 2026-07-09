import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AirportAutocompleteComponent } from './airport-autocomplete/airport-autocomplete.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,AirportAutocompleteComponent],
  // templateUrl: './app.component.html',
  template: `<app-airport-autocomplete></app-airport-autocomplete>`,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'airport-search';
}
