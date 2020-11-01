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
import { MAT_DATE_LOCALE } from '@angular/material/core';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule, MatPaginatorIntl} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatRadioModule} from '@angular/material/radio';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './page/home.component';
import { NovoHospedeModalComponent } from './novo-hospede-modal/novo-hospede-modal.component';
import { NovoHospedeModalDialogComponent } from './novo-hospede-modal/novo-hospede-modal-dialog.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NovoCheckInComponent } from './novo-check-in/novo-check-in.component';
import { ConsultasComponent } from './consultas/consultas.component';
import { UpdateHospedeModalComponent } from './consultas/update-hospede-modal/update-hospede-modal.component';

@NgModule({
  declarations: [
    HomeComponent,
    NovoHospedeModalComponent,
    NovoHospedeModalDialogComponent,
    NovoCheckInComponent,
    ConsultasComponent,
    UpdateHospedeModalComponent
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
    MatTableModule,
    MatSortModule,
    MatRadioModule,
    FormsModule,
    MatPaginatorModule,
    ReactiveFormsModule
  ],
  providers: [
    FormBuilder,
    {provide: MAT_DATE_LOCALE, useValue: 'pt-BR'},
  ]
})
export class HomeModule { }
