import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss'],
})
export class TaskFormComponent implements OnInit {
  taskForm = new FormGroup({
    name: new FormControl(''),
    inicio: new FormControl('08/07/2022 18:30'),
    fim: new FormControl('15/07/2022 10:50'),
    caterogia: new FormControl('trabalho'),
    dificuldade: new FormControl('md'),
  });

  constructor(
    public dialogRef: MatDialogRef<TaskFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string
  ) {}

  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  submit(): void {
    this.dialogRef.close(this.taskForm.getRawValue());
  }
}
