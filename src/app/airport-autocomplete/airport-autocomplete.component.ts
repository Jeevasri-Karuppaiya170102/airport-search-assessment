import { Component } from '@angular/core';
import { AirportService } from '../services/airport.service';
import { Airport } from '../models/airport';
import { debounceTime, distinctUntilChanged, map } from 'rxjs';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-airport-autocomplete',
  standalone: true,
  imports: [CommonModule,JsonPipe, ReactiveFormsModule],
  templateUrl: './airport-autocomplete.component.html',
  styleUrl: './airport-autocomplete.component.scss'
})
export class AirportAutocompleteComponent {



  searchControl = new FormControl('');

  airports: Airport[] = [];

  filteredAirports: Airport[] = [];

  selectedAirport?: Airport;

  showDropdown = false;

  focusedIndex = -1;

  constructor(private airportService: AirportService) {}

  ngOnInit() {

    this.airportService.getAirports().subscribe(data => {
      this.airports = data;
    });

    this.searchControl.valueChanges.pipe(
      debounceTime(250),
      distinctUntilChanged(),
      map(value => (value || '').trim().toLowerCase())
    )
    .subscribe((search:any) => {

      if (!search) {
        this.filteredAirports = [];
        this.showDropdown = false;
        this.focusedIndex = -1;
        return;
      }

      this.filteredAirports = this.airports
        .filter(a =>
          a.code.toLowerCase().includes(search) ||
          a.city.toLowerCase().includes(search)
        )
        .slice(0,5);

      this.showDropdown = true;
      this.focusedIndex = -1;
    });

  }

  selectAirport(airport: Airport) {

    this.selectedAirport = airport;

    this.searchControl.setValue(airport.code, {
      emitEvent:false
    });

    this.showDropdown = false;
  }

  onKeyDown(event: KeyboardEvent) {

    if (!this.showDropdown) {
      return;
    }

    switch(event.key){

      case 'ArrowDown':

        event.preventDefault();

        if(this.focusedIndex < this.filteredAirports.length-1){
          this.focusedIndex++;
        }

        break;

      case 'ArrowUp':

        event.preventDefault();

        if(this.focusedIndex>0){
          this.focusedIndex--;
        }

        break;

      case 'Enter':

        event.preventDefault();

        if(this.focusedIndex>=0){
          this.selectAirport(this.filteredAirports[this.focusedIndex]);
        }

        break;

      case 'Escape':

        this.showDropdown=false;

        break;

    }

  }
}
