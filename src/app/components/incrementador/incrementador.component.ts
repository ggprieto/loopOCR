import { Component, OnInit, Input, Output, ViewChild, ElementRef, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  constructor() { }
  @ViewChild ('txtProgress') txtProgress: ElementRef;
  @Input () leyenda: string = 'Incremento';
  @Input () porcentaje: number = 50;

  @Output () cambioValor: EventEmitter <number> = new EventEmitter;
  ngOnInit() {
  }

  onChanges ( newValue: number ) {
    if ( newValue >= 100 ) {
      this.porcentaje = 100;
    } else if ( newValue <= 0 ) {
      this.porcentaje = 0;
    } else {
      this.porcentaje = newValue;
    }
    this.txtProgress.nativeElement.value = this.porcentaje;
    this.cambioValor.emit( this.porcentaje );
  }

  cambiarvalor ( valor ) {
    if (this.porcentaje <= 0 && this.porcentaje < 0) {
      this.porcentaje = 0;
      return;
    }
    if (this.porcentaje >= 100 && this.porcentaje > 100) {
      this.porcentaje = 100;
      return;
    }
  this.porcentaje = this.porcentaje + valor;

  this.cambioValor.emit( this.porcentaje );

  this.txtProgress.nativeElement.focus();

  }

}
