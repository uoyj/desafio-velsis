import { Component, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

import { CheckIn } from '@data/model/check-in';
import { Hospede } from '@data/model/hospede';
import { CheckInService } from '@data/service/check-in.service';
import { HospedeService } from '@data/service/hospede.service';
import { MatSort } from '@angular/material/sort';




@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styles: [
  ]
})
export class ConsultasComponent implements OnInit {
  hospedes: BehaviorSubject<Hospede[]> = this._hospedes.getAll();
  checkIns: BehaviorSubject<CheckIn[]> = this._checkIns.getAll();
  dataSource = new MatTableDataSource<Hospede>([]);
  colunasAtivas: string[] = ['nome', 'documento'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
    

  constructor( 
    private _hospedes: HospedeService,
    private _checkIns: CheckInService,
  ) { }

  ngOnInit(): void {
    this.hospedes.subscribe(lista => {
        this.dataSource.data = lista;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    );
  }

}