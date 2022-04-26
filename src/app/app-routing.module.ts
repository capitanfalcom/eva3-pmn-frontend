import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PacienteComponent } from './pages/paciente/paciente.component';
import { AgregarPacienteComponent } from './pages/agregarPaciente/agregar-paciente.component';
import { NavComponent } from './pages/nav/nav.component';
import { PagesModule } from './pages/pages.module';



const routes: Routes = [
  { path: 'paciente', component: PacienteComponent  },
  { path: 'agregar', component: AgregarPacienteComponent  },
  { path: 'nav', component: NavComponent  },
  { path: '', redirectTo: '/paciente', pathMatch: 'full' },
  { path: '**', redirectTo: '/paciente' }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports:[
    RouterModule,
    PagesModule
  ]
})
export class AppRoutingModule { }
