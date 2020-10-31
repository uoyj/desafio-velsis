import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { HospedeService } from '@data/service/hospede.service';
import { Hospede } from '@data/model/hospede';
import { CheckInService } from '@data/service/check-in.service';
import { CheckIn } from '@data/model/check-in';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {
  hospedes: Observable<Hospede[]> = this._hospedes.getAll();
  checkIns: Observable<CheckIn[]> = this._checkIns.getAll();
  
  constructor( 
    private _hospedes: HospedeService,
    private _checkIns: CheckInService,
  ) { }

  ngOnInit(): void {
  }

}
