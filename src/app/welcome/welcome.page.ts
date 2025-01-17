import { Component, OnInit } from '@angular/core';
import { IonicSlides } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgStyle } from '@angular/common';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
  standalone: true,
  schemas: [ CUSTOM_ELEMENTS_SCHEMA],
  imports: [ RouterLink,IonicModule, NgStyle ]
})
export class WelcomePage implements OnInit {

  onboardingScreens = [
    {image: '1.jpg'},
    {image: '2.jpg'},
    {image: '3.jpg'},
  ];

  SwiperModules = [ IonicSlides ];
  constructor() { }

  ngOnInit() {
  }

}
