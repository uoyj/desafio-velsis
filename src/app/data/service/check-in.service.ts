import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { CheckIn } from '../model/check-in';
import { JsonApiService } from './json-api.service';

@Injectable({
  providedIn: 'root'
})
export class CheckInService {
  checkIns:CheckIn[] = [];
  data:BehaviorSubject<CheckIn[]> = new BehaviorSubject(this.checkIns);

  constructor( private _jsonApi: JsonApiService ) { }

  getAll(): BehaviorSubject<CheckIn[]>{
    this._jsonApi.get('/check-in').subscribe((response: CheckIn[]) => {
      this.checkIns = response;
      this.data.next(this.checkIns);
    });
    return this.data;
  }

  create(item){
    item.id = this.checkIns.length + 1;
    this.checkIns.push(item);
    return this.data.next(this.checkIns);
  }

}
