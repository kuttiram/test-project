import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from './services/token-storage.service';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'temp-project';
  // isValiedUser: boolean;
  // token: string;
  constructor(private _tokenService: TokenStorageService, private http: HttpClient) { }

  async ngOnInit() {
    // this.token = this._tokenService.getToken();
    // //console.log(this._authService.validateToken(token).toPromise());
    // const result : any =  await this.http.get(`${environment.apiUrl}Users/validatetoken?token=`+this.token).toPromise(); 
    // if(!!this.token && result.isValid){
    //   this.isValiedUser = true;
    // }
    // else{
    //   this.isValiedUser = false;
    // }
  }
}
