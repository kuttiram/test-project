import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-carousel',
  templateUrl: './hero-carousel.component.html',
  styleUrls: ['./hero-carousel.component.css']
})
export class HeroCarouselComponent implements OnInit {
  slides: Array<{image: string}> = []; 
  constructor() { }

  ngOnInit(): void {
    this.slides = [{image:'https://images.pexels.com/photos/2674052/pexels-photo-2674052.jpeg'},
                    {image:'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg'},
                    {image:'https://images.pexels.com/photos/6992/forest-trees-northwestisbest-exploress.jpg'},
                    {image:'https://images.pexels.com/photos/247431/pexels-photo-247431.jpeg'},
                    {image:'https://images.pexels.com/photos/982263/pexels-photo-982263.jpeg'}];
  }

}
