import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { CheckIn } from '../model/check-in';
import { JsonApiService } from './json-api.service';

@Injectable({
  providedIn: 'root'
})
export class CheckInService {

  constructor( private _jsonApi: JsonApiService ) { }

  getAll(): Observable<CheckIn[]>{
    return this._jsonApi.get('/check-in');
  }

  create(item:CheckIn){

  }

  remove(){

  }

  update(){

  }

}
