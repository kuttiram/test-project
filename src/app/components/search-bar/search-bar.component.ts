import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  userIsAuthenticated: boolean = false;
  constructor(private router: Router, private _tokenStorage: TokenStorageService, private _loginService: LoginService) { }

  ngOnInit(): void {
    let _isAuth = this._tokenStorage.getToken();
    if(_isAuth !== undefined && _isAuth !== null && _isAuth !== ""){
      this.userIsAuthenticated = true;
    }
    else{
      this.userIsAuthenticated = false;
    }

    this._loginService.$isLoggedIn
        .subscribe((data) => {
          this.userIsAuthenticated = data;
        });

    this._loginService.$isLoggedOut
        .subscribe((data) => {
          this.userIsAuthenticated = data;
        });    
}

  onSubmit(form: NgForm){
    this.router.navigate(['search', form.value.search])
  }

  onLogout(e: any)
  {
    e.preventDefault();
    this._loginService.logout();
  }

  onLogingo(e: any){
    e.preventDefault();
    this.router.navigate(['/login'])
  }
}
