import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { HospedeService } from '@data/service/hospede.service';

@Component({
  selector: 'app-novo-hospede-modal-dialog',
  templateUrl: './novo-hospede-modal-dialog.component.html',
  styleUrls: ["./novo-hospede-modal-dialog.scss"]
})
export class NovoHospedeModalDialogComponent implements OnInit {
  public hospedeForm: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private _hospedes: HospedeService,
    public dialogRef: MatDialogRef<NovoHospedeModalDialogComponent>
    ) { }

  ngOnInit(): void {
    this.hospedeForm = this._formBuilder.group({
      nome: ['', [Validators.required]],
      documento: ['', [Validators.required]],
      telefone: ['', []]
    })
  }

  salvarHospede(){
    this._hospedes.create(this.hospedeForm.value)
  }
  
  cancelar(){
    this.dialogRef.close();
    this.hospedeForm.reset();
  }
}
