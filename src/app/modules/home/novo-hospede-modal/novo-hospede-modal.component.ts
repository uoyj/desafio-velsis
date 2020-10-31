import { Component, OnInit } from '@angular/core';

import {MatDialog} from '@angular/material/dialog';
import { NovoHospedeModalDialogComponent } from './novo-hospede-modal-dialog.component';

@Component({
  selector: 'app-novo-hospede-modal',
  templateUrl: './novo-hospede-modal.component.html',
  styles: [
  ]
})
export class NovoHospedeModalComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    const dialogRef = this.dialog.open(NovoHospedeModalDialogComponent, {
      minWidth: '50vw',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}