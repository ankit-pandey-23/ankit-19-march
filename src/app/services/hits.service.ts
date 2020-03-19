import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HitsService {

  constructor( public http:HttpClient) { }

  getData(): Observable<any>{
    return this.http.get('https://hn.algolia.com/api/v1/search_by_date?tags=story');
  }
}
