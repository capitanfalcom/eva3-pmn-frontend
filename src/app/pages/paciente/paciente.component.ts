import { Component, OnInit } from '@angular/core';
import { PacienteService } from 'src/app/services/paciente.service';
import { Paciente } from "src/app/interfaces/paciente";
declare var window: any;


@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css']
})
export class PacienteComponent implements OnInit {

  constructor(private sPaciente: PacienteService) { }
  pacientes: Paciente[] = [];
  paciente = {
    rut:''
  };




  ngOnInit(): void {
    this.sPaciente.allPacientes().subscribe(resp => {      
      this.pacientes = resp;
      console.log(this.pacientes);
    });
    
  }

  borrarPaciente(){
    this.sPaciente.deletePaciente(this.paciente.rut).subscribe(resp => {      
      this.paciente = resp;
      console.log(this.paciente);
      window.location.reload();
    });

  }

  

  

}
