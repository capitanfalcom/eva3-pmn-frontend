import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Paciente } from '../interfaces/paciente';


@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  private apirURL: string = 'http://localhost:8080/api/paciente';

  constructor(private http: HttpClient) { }

  allPacientes( ): Observable<any> {
    const url = `${ this.apirURL }/all`;
    return this.http.get<any>(url);
  }

  setPaciente( paciente:any ) {   
    const headers = { 'content-type': 'application/json'}
    const url = `${ this.apirURL }`;
    const body=JSON.stringify(paciente);
    return this.http.post<any>(url, body, {'headers':headers});
  }

  editPaciente( paciente:any ) {   
    const headers = { 'content-type': 'application/json'}
    const url = `${ this.apirURL }`;
    const body=JSON.stringify(paciente);
    return this.http.put<any>(url, body, {'headers':headers});
  }

  deletePaciente( paciente:any ) { 
    const url = `${ this.apirURL }/remove/${paciente.rut}`;
    return this.http.delete<any>(url);
  }


  
  
  
}
