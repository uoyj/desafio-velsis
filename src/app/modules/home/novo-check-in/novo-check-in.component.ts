import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';

import moment from "moment";

//import { CheckIn } from '@data/model/check-in';
import { Hospede } from '@data/model/hospede';
import { CheckInService } from '@data/service/check-in.service';
import { HospedeService } from '@data/service/hospede.service';

@Component({
  selector: 'app-novo-check-in',
  templateUrl: './novo-check-in.component.html',
  styleUrls: ['./novo-check-in.scss']
})
export class NovoCheckInComponent implements OnInit {
  public checkInForm: FormGroup;
  hospedesObs: BehaviorSubject<Hospede[]> = this._hospedes.getAll();
  hospedes: Hospede[] = [];
  filteredHospedes: Observable<Hospede[]>;

  constructor(
    private _formBuilder: FormBuilder,
    private _checkIns: CheckInService,
    private _hospedes: HospedeService,
    ) { }

  ngOnInit(): void {
    this.hospedesObs.subscribe(lista => this.hospedes = lista);

    this.checkInForm = this._formBuilder.group({
      hospede: ['', [Validators.required]],
      dataEntrada: ['', [Validators.required]],
      horaEntrada: ['', [Validators.required]],
      dataSaida: ['', [Validators.required]],
      horaSaida: ['', [Validators.required]],
      adicionalVeiculo: new FormControl(false),      
    });

    this.filteredHospedes = this.checkInForm.get('hospede').valueChanges
      .pipe(
        startWith(''),
        map(value => value ? (typeof value === 'string' ? value : value.nome) : ''),
        map(input => input ? this._filterHospedes(input) : this.hospedes.slice())
      );
  }

  private _filterHospedes(input: string): Hospede[]{
    const filterValue = input.toLowerCase();

    return this.hospedes.filter(hospede => 
        hospede.nome.toLowerCase().indexOf(filterValue) === 0 || 
        hospede.documento.toLowerCase().indexOf(filterValue) === 0
      );
  }

  validarHospede(){
    setTimeout(()=> {
      let hospede = this.checkInForm.get('hospede');
      if(!(hospede.value && hospede.value.id)) hospede.setValue('');
     }, 200);
  }

  displayAutoHospede(hospede: Hospede):string {
    return  hospede ? hospede.nome : '';
  }

  salvarCheckIn(){
    let horaEntradaArray = this.checkInForm.value.horaEntrada.split(":");
    let horaSaidaArray = this.checkInForm.value.horaSaida.split(":"); 

    let checkIn = {
      hospedeId: this.checkInForm.value.hospede.id,
      adicionalVeiculo: this.checkInForm.value.adicionalVeiculo,
      dataEntrada: moment(this.checkInForm.value.dataEntrada)
                  .hours(horaEntradaArray[0]).minutes(horaEntradaArray[1]).toISOString(),
      dataSaida: moment(this.checkInForm.value.dataSaida)
                .hours(horaSaidaArray[0]).minutes(horaSaidaArray[1]).toISOString(),
    };

    this._checkIns.create(checkIn);
    this.checkInForm.reset();
    for (let name in this.checkInForm.controls) {
      this.checkInForm.controls[name].setErrors(null);
    }
 
  }

}
