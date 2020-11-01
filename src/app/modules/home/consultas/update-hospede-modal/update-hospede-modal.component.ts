import { Component, Inject, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { HospedeService } from '@data/service/hospede.service';

@Component({
  selector: 'app-update-hospede-modal',
  templateUrl: './update-hospede-modal.component.html',
  styleUrls: ['./update-hospede-modal.scss']
})
export class UpdateHospedeModalComponent implements OnInit {
  public hospedeForm: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private _hospedes: HospedeService,
    public dialogRef: MatDialogRef<UpdateHospedeModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    this.hospedeForm = this._formBuilder.group({
      id: [this.data.id, []],
      nome: [this.data.nome, [Validators.required]],
      documento: [this.data.documento, [Validators.required]],
      telefone: [this.data.telefone, []]
    })
  }

  salvarHospede(){
    this._hospedes.update(this.hospedeForm.value)
    this.hospedeForm.reset();
    this.dialogRef.close();
  }
  
  removerHospede(){
    this._hospedes.create(this.hospedeForm.value)
    this.hospedeForm.reset();
    this.dialogRef.close();
  }

  cancelar(){
    this.dialogRef.close();
    this.hospedeForm.reset();
  }

}
