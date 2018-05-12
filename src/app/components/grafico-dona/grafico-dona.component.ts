import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: []
})
export class GraficoDonaComponent implements OnInit {

  @Input() titulo: string = '';
  @Input() datos: number[] = [];
  @Input() etiquetas: string[] = [];
  @Input() tipoGrafico: string = '';

  constructor() { }

  ngOnInit() {
  }

}
