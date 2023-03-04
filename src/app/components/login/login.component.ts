import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  formGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  })

  userIsAuthenticated: boolean = false;
  constructor(private _loginService: LoginService) { }

  ngOnInit(): void {
    //this.initForm();
  }

  initForm() {
    this.formGroup = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }

  loginProcess() {
    if (this.formGroup.valid) {
      let username = (this.formGroup.value.username != null ? this.formGroup.value.username : "");
      let password = (this.formGroup.value.password != null ? this.formGroup.value.password : "");;
      this._loginService.login(username, password);
    }
  }

}
