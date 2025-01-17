import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import {IonicSlides} from '@ionic/angular/standalone'
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { addIcons } from 'ionicons';
import { arrowForwardOutline,
         locateOutline, 
         locationOutline, 
         notificationsOutline, 
         optionsOutline } from 'ionicons/icons';
import { Category } from '../interfaces/category.interface';
import { Event } from '../interfaces/event.interface';
import { events } from '../data/events';
import { categories } from '../data/categories';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [IonicModule, RouterLink, DatePipe],
})
export class HomePage implements OnInit{

  swiperModules = [IonicSlides];
  upcomingEvents: Event[] = [];
  currentEvents: Event[] = [];
  categories: Category[] = [];
  
  constructor() {
    addIcons({locateOutline, 
      locationOutline, 
      notificationsOutline, 
      optionsOutline, 
      arrowForwardOutline});
  }
  ngOnInit(): void {
    this.currentEvents = [...events];
    this.upcomingEvents = events.sort((a,b) => {
      //Convert id to number for comparison
      const idA = parseInt(a.id, 10);
      const idB = parseInt(b.id, 10);
      return idB - idA; //Descending order
    });
    this.categories = [...categories];
  }
}
