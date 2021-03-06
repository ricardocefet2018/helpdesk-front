import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form = new FormGroup({
    login: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private router: Router) {}

  ngOnInit(): void {}

  login() {
    this.router.navigate(['/home']);
  }
}
