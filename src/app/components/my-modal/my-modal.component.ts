import { Component, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-my-modal',
  templateUrl: './my-modal.component.html',
  styleUrl: './my-modal.component.css'
})
export class MyModalComponent {
  @Input() visible = false;
  //desde el hijo, evento de salida
  @Output () visibleChange = new EventEmitter<boolean>();
}
