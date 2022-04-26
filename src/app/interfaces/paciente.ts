export interface Paciente {
    _id?: number;
    rut: string;
    nombre: string;
    edad: number;
    sexo: string;
    fotoPersonal?: string;
    fechaIngreso?: Date;
    enfermedad: string;
    revisado: boolean;

}