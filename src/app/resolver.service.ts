import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { first, Observable, ReplaySubject } from 'rxjs';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root',
})
export class ResolverService implements Resolve<any> {
  data: any = [];
  endpointFetched: boolean = false;
  endpointSub = new ReplaySubject<any>();

  constructor(private http: HttpClient, private dataService: DataService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    // Hit endpoint only once
    if (!this.endpointFetched) {
      this.endpointFetched = true;
      this.dataService.getSomething().subscribe((data) => {
        this.endpointSub.next(data);
      });
    }
    return this.endpointSub.pipe(first());
  }
}
