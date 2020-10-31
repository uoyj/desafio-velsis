import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Hospede } from '../model/hospede';
import { JsonApiService } from './json-api.service';

@Injectable({
  providedIn: 'root'
})
export class HospedeService {

  hospedes:Hospede[] = [];

  constructor( private _jsonApi: JsonApiService ) { }

  getAll(): Observable<Hospede[]>{
    this._jsonApi.get('/hospede').subscribe((response: Hospede[]) => {
      this.hospedes = response;
    });
    return of(this.hospedes);
  }

  create(item:Hospede){
    item.id = this.hospedes.length + 1;
    this.hospedes.push(item);
  }

  remove(id: number){
    
  }

  update(id: number){

  }
}
