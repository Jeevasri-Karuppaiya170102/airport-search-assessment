import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirportAutocompleteComponent } from './airport-autocomplete.component';

describe('AirportAutocompleteComponent', () => {
  let component: AirportAutocompleteComponent;
  let fixture: ComponentFixture<AirportAutocompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AirportAutocompleteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AirportAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
