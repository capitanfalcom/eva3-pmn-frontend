import { Component, Input, OnInit } from '@angular/core';
import { PacienteService } from 'src/app/services/paciente.service';
declare var window: any;

@Component({
  selector: 'app-agregar-paciente',
  templateUrl: './agregar-paciente.component.html',
  styleUrls: ['./agregar-paciente.component.css']
})
export class AgregarPacienteComponent implements OnInit {

  selectSexo= ['Masculino', 'Femenino'];

  newPaciente = {
    nombre: '',
    rut: '',
    edad: '',
    sexo: '',
    enfermedad: '',
    imagen:'',
    revisado: ''
  };

  constructor(private sPaciente: PacienteService) {
    
  } 

  ngOnInit(): void {
    this.newPaciente = {
      nombre: '',
      rut: '',
      edad: '',
      sexo: '',
      enfermedad: '',
      imagen:'',
      revisado: ''
    };
  }

  agregarPaciente(){            
    this.sPaciente.setPaciente(this.newPaciente).subscribe(resp => {     
      console.log(resp);
      window.location = "http://localhost:4200/paciente";
    });
  }

}
