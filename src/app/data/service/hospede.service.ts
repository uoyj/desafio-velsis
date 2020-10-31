import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Hospede } from '../model/hospede';
import { JsonApiService } from './json-api.service';

@Injectable({
  providedIn: 'root'
})
export class HospedeService {

  constructor( private _jsonApi: JsonApiService ) { }

  getAll(): Observable<Hospede[]>{
    return this._jsonApi.get('/hospede');
  }

  create(item:Hospede){

  }

  remove(){

  }

  update(){

  }
}
