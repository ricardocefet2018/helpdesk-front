import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'month-view',
  templateUrl: './month-view.component.html',
  styleUrls: ['./month-view.component.scss'],
})
export class MonthViewComponent implements OnInit {
  dias: number[][] = [];

  semanas: number[][] = [];

  constructor() {
    Array.from({ length: 500 })
      .map((_, i) => {
        let vezes = Math.floor(i / 31);
        return i - 30 * vezes;
      })
      .map((dia, index) => {
        let semana = Math.floor(index / 7);
        if (this.dias[semana]) {
          this.dias[semana].push(dia);
        } else {
          this.dias[semana] = [dia];
        }
      });
  }

  ngOnInit(): void {
    console.log(this.dias);
  }
}
