import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'countries-by-region-page',
  standalone: false,
  templateUrl: './by-region-page.component.html',
  styles: ``,
})
export class ByRegionPageComponent {
  @Input()
  public countries: Country[] = [];

  constructor(private countriesService: CountriesService) {}

  public searchByRegion(term: string): void {
    this.countriesService
      .searchRegion(term)
      .subscribe((countries) => (this.countries = countries));
  }
}
