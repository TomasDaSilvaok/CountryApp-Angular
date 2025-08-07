import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'countries-table',
  standalone: false,
  templateUrl: './contry-table.component.html',
  styles: `
    img {
      width: 25px
    }
  `,
})
export class ContryTableComponent {
  @Input()
  public countries: Country[] = [];
}
