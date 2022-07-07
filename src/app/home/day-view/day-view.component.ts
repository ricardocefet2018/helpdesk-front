import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'day-view',
  templateUrl: './day-view.component.html',
  styleUrls: ['./day-view.component.scss'],
})
export class DayViewComponent implements OnInit {
  dia = {
    semana: 'Sab.',
    mes: 9,
  };
  horas = Array.from({ length: 24 }).map((_, i) => ++i);

  constructor() {}

  ngOnInit(): void {}
}
