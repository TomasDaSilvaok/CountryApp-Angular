import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'shared-search-box',
  standalone: false,
  templateUrl: './search-box.component.html',
  styles: ``,
})
export class SearchBoxComponent {
  @ViewChild('txtInput')
  public inputValue!: ElementRef<HTMLInputElement>;

  @Input()
  public placeholder: string = '';

  @Output()
  public searchValue: EventEmitter<string> = new EventEmitter();

  onValue(): void {
    if (!this.inputValue.nativeElement.value.trim()) return;

    this.searchValue.emit(this.inputValue.nativeElement.value);
    this.inputValue.nativeElement.value = '';
  }
}
