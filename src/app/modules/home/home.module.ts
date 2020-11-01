import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatMomentDateModule} from '@angular/material-moment-adapter';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatCheckboxModule} from '@angular/material/checkbox';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './page/home.component';
import { NovoHospedeModalComponent } from './novo-hospede-modal/novo-hospede-modal.component';
import { NovoHospedeModalDialogComponent } from './novo-hospede-modal/novo-hospede-modal-dialog.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { NovoCheckInComponent } from './novo-check-in/novo-check-in.component';
import { MAT_DATE_LOCALE } from '@angular/material/core';

@NgModule({
  declarations: [
    HomeComponent,
    NovoHospedeModalComponent,
    NovoHospedeModalDialogComponent,
    NovoCheckInComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,    
    MatExpansionModule,
    MatIconModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    ReactiveFormsModule
  ],
  providers: [
    FormBuilder,
    {provide: MAT_DATE_LOCALE, useValue: 'pt-BR'},
  ]
})
export class HomeModule { }
