import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { CheckIn } from '../model/check-in';
import { JsonApiService } from './json-api.service';

@Injectable({
  providedIn: 'root'
})
export class CheckInService {
  checkIns:CheckIn[] = [];
  constructor( private _jsonApi: JsonApiService ) { }

  getAll(): Observable<CheckIn[]>{
    this._jsonApi.get('/check-in').subscribe((response: CheckIn[]) => {
      this.checkIns = response;
    });
    return of(this.checkIns);
  }

  create(item){
    item.id = this.checkIns.length + 1;
    this.checkIns.push(item);
  }

  remove(){

  }

  update(){

  }

}
