import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { JsonApiService } from './json-api.service';

@Injectable({
  providedIn: 'root'
})
export class ConfigsService {

  constructor(private _jsonApi: JsonApiService) { }

  get(): Observable<any>{
    return this._jsonApi.get('/configs');
  }
}
