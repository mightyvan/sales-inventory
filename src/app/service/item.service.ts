import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Item } from '../model/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  itemApi = 'http://workingpointapi.test/api/searchItem/';
  constructor(private http: HttpClient) { }

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.itemApi);
  }
  showItem(slug: string): Observable<Item[]> {
    return this.http.get<Item[]>(this.itemApi + slug);
  }
  search(data: string): Observable<Item[]> {
    if (!data.trim()) {
      // if not search data, return empty item array.
      return of([]);
    }
    return this.http.get<Item[]>(`${this.itemApi}${data}`);
  }
}
