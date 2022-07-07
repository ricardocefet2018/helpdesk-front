import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'week-view',
  templateUrl: './week-view.component.html',
  styleUrls: ['./week-view.component.scss'],
})
export class WeekViewComponent implements OnInit {
  dias = [
    {
      semana: 'Dom.',
      mes: 3,
    },
    {
      semana: 'Seg.',
      mes: 4,
    },
    {
      semana: 'Ter.',
      mes: 5,
    },
    {
      semana: 'Qua.',
      mes: 6,
    },
    {
      semana: 'Qui.',
      mes: 7,
    },
    {
      semana: 'Sex.',
      mes: 8,
    },
    {
      semana: 'Sab.',
      mes: 9,
    },
  ];
  horas = Array.from({ length: 24 }).map((_, i) => ++i);

  constructor() {}

  ngOnInit(): void {}
}
