import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Router } from '@angular/router';
import { Time } from '@angular/common';
import { CartService } from '../cart.service';
import { Url } from 'url';

@Component({
  selector: 'app-service-nav-bar',
  templateUrl: './service-nav-bar.component.html',
  styleUrls: ['./service-nav-bar.component.css']
})
export class ServiceNavBarComponent implements OnInit {
   serviceName: string;
   time: Time;
   date: string;
   imgsrc: string;
   drug: string;
   rooms: number;
   persons: number;
   groceries: boolean;
   payment: string;
  constructor(public cartService: CartService) { }

  ngOnInit() {
    this.serviceName = this.cartService.serviceName;
    this.time = this.cartService.time;
    this.date = this.cartService.date;
    if ( this.serviceName === 'Cooking' ) {
      this.imgsrc = 'cook.jpg';
      this.persons = this.cartService.persons;
      this.groceries = this.cartService.groceries;
      this.payment = 'Our team will contact you shortly';
    } else if ( this.serviceName === 'Pharamacy' ) {
      this.imgsrc = 'phar.jpg';
      this.drug = this.cartService.drug;
      if(this.drug === 'Dolo 650mg'){
      this.payment = '20';
    } else if (this.drug === 'Aspirin') {
        this.payment = '30';
      } else {
        this.payment = '40';
      }
    } else if ( this.serviceName === 'Cleaning' ) {
      this.imgsrc = 'cleaning_logo1.jpg';
      this.rooms = this.cartService.rooms;
      this.payment = (this.rooms * 100).toString() ;
    }

  }

}
