import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpclientService } from 'src/app/services/httpclient.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public sort: string = "";
  gameList: any[] = [];
  constructor(private http: HttpclientService, private router: Router) { 
    
  }

  ngOnInit(): void {
    this.onGetGames();
  }

  onGetGames()
  {
    this.http.getGameList("","").subscribe(
      data => {
        this.gameList = data
        },
      err =>
      {
        console.log(err);
      }
    );
  }

  onDetailNav(e: any)
  {
    e.preventDefault();
    this.router.navigate(['/detail']);
  }

}
