import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpclientService } from 'src/app/services/httpclient.service';

@Component({
  selector: 'app-multi-card',
  templateUrl: './multi-card.component.html',
  styleUrls: ['./multi-card.component.css']
})
export class MultiCardComponent implements OnInit {
  gameList: any[] = [];
  constructor(private http: HttpclientService, private router: Router) { }

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
