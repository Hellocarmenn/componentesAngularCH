import { Component, Input, Output } from '@angular/core';
import { Empleado } from '../../models/empleado';
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'app-empleados-lista',
  templateUrl: './empleados-lista.component.html',
  styleUrl: './empleados-lista.component.css'
})
export class EmpleadosListaComponent {
  //Componente Hijo, Cuando usamos input deicmos que esta propiedad la recibiremos del componente padre
  @Input() data: Empleado[]= [];
  @Output() eliminarEmpleado = new EventEmitter();

}
