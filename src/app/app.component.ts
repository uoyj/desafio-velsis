import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Hospede } from '@data/model/hospede';
import { HospedeService } from '@data/service/hospede.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  hospedes: Observable<Hospede[]> = this._hospedes.getAll();
  title = 'desafio-velsis';

  constructor( private _hospedes: HospedeService){
    this.hospedes.subscribe(h=> console.log(h))
  }
}