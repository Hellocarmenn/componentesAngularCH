import { Component } from '@angular/core';
import { Empleado } from './models/empleado';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'componentesAngular';
//Componente padre
  empleadosPresentes: Empleado[] = [
    {
      id:1,
      nombre:'Rogelio',
      apellido:'Carrillo'
    },
    {
      id:2,
      nombre:'Carmen',
      apellido:'Martinez'
    },
    {
      id:3,
      nombre:'Xare',
      apellido:'Rosano'
    },
  ];

  empleadosAusentes: Empleado[] = [
    {
      id:4,
      nombre:'Ana',
      apellido:'Carrillo'
    },
    {
      id:5,
      nombre:'Paola',
      apellido:'Martinez'
    },
    {
      id:6,
      nombre:'Luis',
      apellido:'Rosano'
    },
  ];

  eliminarEmpleado(idEliminar:number , from :string){
    if(from === 'empleadosPresentes'){
      this.empleadosPresentes = this.empleadosPresentes.filter(
        (empleado) => empleado.id != idEliminar
      );
    }
    if(from === 'empleadosAusentes'){
      this.empleadosAusentes = this.empleadosAusentes.filter(
        (empleado) => empleado.id != idEliminar
      );
    }
    
    console.log('Recibimos el evento eliminarEmpleado en AppComponent')
  }
}
