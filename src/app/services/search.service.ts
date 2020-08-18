import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from '../entities/product';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  findProduct(searchText: string): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:8090/api/search/product/');
  }

}
