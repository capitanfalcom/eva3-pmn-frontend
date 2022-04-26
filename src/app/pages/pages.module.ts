import { NgModule } from '@angular/core';
import { PacienteComponent } from './paciente/paciente.component';
import { NavComponent } from './nav/nav.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AgregarPacienteComponent } from './agregarPaciente/agregar-paciente.component';
import { FormsModule } from '@angular/forms';





@NgModule({
  declarations: [
    NavComponent,
    PacienteComponent,
    AgregarPacienteComponent
  ],
  imports: [
    BrowserModule,  
    RouterModule,
    FormsModule
  ],
  exports:[
    NavComponent
  ]
})
export class PagesModule { }
