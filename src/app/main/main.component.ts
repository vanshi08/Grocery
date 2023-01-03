import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent  implements OnInit{

  constructor(private route:ActivatedRoute, private router:Router) { }
  ngOnInit(): void {
    
  }
  slides = [
    { img: '../assets/background.png' },
    { img: '../assets/fruits.png' },
    { img: '../assets/vegetables.webp' },
    { img: '../assets/dairy-products.png' },
  
  ];
  slideConfig = { slidesToShow: 4, slidesToScroll: 4 };



}
