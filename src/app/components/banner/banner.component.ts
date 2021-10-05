import { Component, OnInit } from '@angular/core';
import { HttpclientService } from 'src/app/services/httpclient.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  
  homedata: any = {};
  constructor(private http: HttpclientService) { }

  ngOnInit(): void {
    this.onGetHomeTile();
  }

  onGetHomeTile()
  {
    this.http.getHomeTitle().subscribe(
      data => {
        this.homedata = data;
        },
      err =>
      {
        console.log(err);
      }
    );
  }

}
