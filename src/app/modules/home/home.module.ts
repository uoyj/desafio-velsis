import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './page/home.component';
import { NovoHospedeModalComponent } from './novo-hospede-modal/novo-hospede-modal.component';
import { NovoHospedeModalDialogComponent } from './novo-hospede-modal/novo-hospede-modal-dialog.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent,
    NovoHospedeModalComponent,
    NovoHospedeModalDialogComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  providers: [
    FormBuilder,
  ]
})
export class HomeModule { }
