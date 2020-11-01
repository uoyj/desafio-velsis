import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';

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
  hospedesObs: Observable<Hospede[]> = this._hospedes.getAll();
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
        map(value => typeof value === 'string' ? value : value.nome),
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
    return hospede.nome;
  }

}
