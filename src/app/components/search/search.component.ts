import {Component, Input} from '@angular/core';
import {Product} from '../../entities/product';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {

  @Input() products: Product[];

}
