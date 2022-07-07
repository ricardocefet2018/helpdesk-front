import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-list-dialog',
  templateUrl: './list-dialog.component.html',
  styleUrls: ['./list-dialog.component.scss'],
})
export class ListDialogComponent implements OnInit {
  categories = [
    {
      name: 'Prova',
      color: 'rgb(186, 104, 200)',
      fontColor: 'rgb(255, 255, 255)',
    },
    {
      name: 'Trabalho',
      color: 'rgb(92, 107, 192)',
      fontColor: 'rgb(255, 255, 255)',
    },
    {
      name: 'Atividade',
      color: 'rgb(141, 110, 99)',
      fontColor: 'rgb(255, 255, 255)',
    },
  ];

  constructor(
    public dialogRef: MatDialogRef<ListDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string
  ) {}

  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
