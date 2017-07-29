import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = new FormControl('');

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() { }


  submit() {
    this.router.navigate(['directions']);
  }
}
