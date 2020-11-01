import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Hospede } from '../model/hospede';
import { JsonApiService } from './json-api.service';

@Injectable({
  providedIn: 'root'
})
export class HospedeService {

  hospedes:Hospede[] = [];
  data:BehaviorSubject<Hospede[]> = new BehaviorSubject(this.hospedes)

  constructor( private _jsonApi: JsonApiService ) { }

  getAll(): BehaviorSubject<Hospede[]>{
    this._jsonApi.get('/hospede').subscribe((response: Hospede[]) => {
      this.hospedes = response;
      this.data.next(this.hospedes);
    });
    return this.data;
  }

  create(item:Hospede){
    item.id = this.hospedes.length + 1;
    this.hospedes.push(item);
    return this.data.next(this.hospedes);
  }

  remove(id: number){
    
  }

  update(id: number){

  }
}
