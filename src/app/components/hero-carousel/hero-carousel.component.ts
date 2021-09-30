import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-hero-carousel',
  templateUrl: './hero-carousel.component.html',
  styleUrls: ['./hero-carousel.component.css'],
  providers: [NgbCarouselConfig] 
})
export class HeroCarouselComponent implements OnInit {
  slides: Array<{image: string}> = []; 
  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
  }

  ngOnInit(): void {
    
  }
  images = [{image:'https://i.stack.imgur.com/sRYBZ.jpg'},
                    {image:'https://mdbootstrap.com/img/Photos/Slides/img%20(18).jpg'},
                    {image:'https://mdbootstrap.com/img/Photos/Slides/img%20(19).jpg'},
                    {image:'https://mdbootstrap.com/img/Photos/Slides/img%20(20).jpg'},
                    {image:'https://mdbootstrap.com/img/Photos/Slides/img%20(21).jpg'}];
  //images = [700, 533, 807, 124].map((n) => `https://picsum.photos/id/${n}/900/500`);
}

