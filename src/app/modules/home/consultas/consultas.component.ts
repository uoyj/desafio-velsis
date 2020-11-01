import { Component, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

import { CheckIn } from '@data/model/check-in';
import { Hospede } from '@data/model/hospede';
import { CheckInService } from '@data/service/check-in.service';
import { HospedeService } from '@data/service/hospede.service';
import { MatSort } from '@angular/material/sort';

import {ConfigsService} from '@data/service/configs.service';

import moment from "moment";

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styles: [
  ]
})
export class ConsultasComponent implements OnInit {
  hospedes: BehaviorSubject<Hospede[]> = this._hospedes.getAll();
  checkIns: BehaviorSubject<CheckIn[]> = this._checkIns.getAll();
  configs:any = {};
  gastos = new Map();

  dataSource = new MatTableDataSource<Hospede>([]);
  colunasAtivas: string[] = ['nome', 'documento', 'gasto'];

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
    

  constructor( 
    private _hospedes: HospedeService,
    private _checkIns: CheckInService,
    private _configs: ConfigsService,
  ) { }

  ngOnInit(): void {
    this.hospedes.subscribe(lista => {
        lista.map(item => {
          if(!this.gastos.get(item.id)) this.gastos.set(item.id, 0);
        })
        this.dataSource.data = lista;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    );
    
    this._configs.get().subscribe(conf => {
      this.configs = conf;

      this.checkIns.subscribe(lista => {
        this._calcularGastos(lista);
      });
    });

  }

  valorGasto(item: Hospede){
    return this.gastos.get(item.id);
  }

  private _calcularGastos(lista: CheckIn[]){
    this.dataSource.data.forEach(hospede => {
      let checkIns = lista.filter(check => check.hospedeId == hospede.id);
      let soma = 0;
      checkIns.forEach(check => {
        soma += this._calcularGastoCheckIn(check);
      });

      this.gastos.set(hospede.id, soma);
    });
  }

  private _calcularGastoCheckIn(check: CheckIn): number{
    let soma = 0;
    let mEntrada  = moment(check.dataEntrada);
    let mSaida  = moment(check.dataSaida);
    let dias = mSaida.diff(mEntrada, 'days');
    let mControle = mSaida.clone()
      .hours(this.configs.limiteCheckoutHora).minutes(this.configs.limiteCheckoutMinuto);
  
    if(dias < 1) dias = 1;
    if(mSaida.isSameOrAfter(mControle)) dias += 1;

    while(dias > 0){
      if(mEntrada.isoWeekday() !== 6 && mEntrada.isoWeekday() !== 7){
        soma += this.configs.diaria;
        if(check.adicionalVeiculo) soma+= this.configs.vaga;
      } else {
        soma += this.configs.diariaFDS;
        if(check.adicionalVeiculo) soma+= this.configs.vagaFDS;
      }
      mEntrada.add(1, 'days');
      dias -= 1;
    }

    return soma;
  };

}