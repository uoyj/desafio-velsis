import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import checkIns from './json/check-ins.json';
import hospedes from './json/hospedes.json';

@Injectable({
  providedIn: 'root'
})
export class JsonApiService {

  constructor() { }

  get(url: string): Observable<any> {
    switch (url) {
      case '/check-in':
        return of(checkIns);
      case '/hospede':
        return of(hospedes)
    }
  }
}
