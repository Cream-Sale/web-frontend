import {Component} from '@angular/core';
import {Product} from './entities/product';
import {SearchService} from './services/search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cream Sale';

  searchText: string;
  isFound = false;

  products: Product[];

  searchService: SearchService;

  constructor(searchService: SearchService) {
    this.searchService = searchService;
  }

  search(searchText: string): void{
    this.searchService.findProduct(searchText).subscribe(result => this.products = result);
    this.isFound = true;
  }
}
