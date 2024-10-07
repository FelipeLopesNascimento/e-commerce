import { Component, OnInit } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrl: './slideshow.component.css'
})
export class SlideshowComponent implements OnInit {

  slides = [
    { img: '/slides/slide1.png', alt: 'Slide 1' },
    { img: '/slides/slide2.png', alt: 'Slide 2' },
    { img: '/slides/slide3.png', alt: 'Slide 3' },
    { img: '/slides/slide4.png', alt: 'Slide 4' },
    { img: '/slides/slide5.png', alt: 'Slide 5' }
  ];

  swiper: Swiper | undefined;

  ngOnInit() {
    this.swiper = new Swiper('.swiper-container', {
      autoplay: {
        delay: 3000,  // Muda os slides a cada 3 segundos
        disableOnInteraction: false,  // Continua mudando mesmo com interação do usuário
      },
      loop: true,  // Os slides continuam em loop
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }
}
