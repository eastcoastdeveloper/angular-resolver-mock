import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from './data.service';
import { PhoneResponse } from './item.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  message: PhoneResponse;
  num: number = null;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private dataService: DataService
    ) {}

  ngOnInit(): void {
    this._activatedRoute.data.subscribe((items) => {
      this.message = items.dummyJSON;
      this.num = this.dataService.num
    });
  }
}
