import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { PhoneResponse } from './item.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  json: PhoneResponse[] = [];
  num: number = 0;

  constructor(private _http: HttpClient) {}

  getSomething() {
    return this._http
      .get<PhoneResponse[]>('https://dummyjson.com/products/1')
      .pipe(
        tap((res) => {
          this.num++;
          this.json = res;
        })
      );
  }
}
