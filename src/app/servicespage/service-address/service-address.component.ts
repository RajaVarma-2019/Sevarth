import { Component, OnInit } from '@angular/core';
import { NgForm, FormControl, Validators } from '@angular/forms';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-service-address',
  templateUrl: './service-address.component.html',
  styleUrls: ['./service-address.component.css']
})
export class ServiceAddressComponent implements OnInit {




  constructor(public cartService: CartService, private router: Router) {}
  serviceNames = [ 'Cooking', 'Cleaning', 'Pharamacy' ];
  drugs = [ 'Dolo 650mg ', ' Cetirizine ', ' Aspirin ' ];
  date = new Date();
  flag1 = 0;
  flag2 = 0;
  flag3 = 0;
  flag4 = 0;

  /*drugControl: FormControl;
  nameControl: FormControl;
  getNameError() {
    return this.nameControl.hasError('required') ? 'You must select a service' : '';
  }

  getDrugError() {
    return this.drugControl.hasError('required') ? 'You must select a drug' : '';
  }*/
    onFormSubmit(form: NgForm) {
      /*if (form.invalid) {
        return;
      }*/
      if (form.value.serviceName === '') {
        this.flag1 = 1;
      } else {
        this.flag1 = 0;
      }
      if (form.value.date === '') {
        this.flag4 = 1;
      } else if (form.value.date < this.date) {
        this.flag2 = 1;
      } else {
        this.flag2 = 0;
        this.flag4 = 0 ;
      }
      if (form.value.time === '') {
        this.flag3 = 1;
      } else {
        this.flag3 = 0;
      }
      if ( this.flag1 === 1 || this.flag2 === 1 || this.flag3 === 1 || this.flag4 === 1 ) {
        return;
      }

      if (form.value.serviceName === 'Pharamacy') {
        this.cartService.readPharamacy(form.value.serviceName, form.value.time, form.value.date.toLocaleDateString(), form.value.drug);
        this.router.navigate(['/servicefinal']);

      } else if ( form.value.serviceName === 'Cleaning' ) {
      this.cartService.readCleaning(form.value.serviceName, form.value.time, form.value.date.toLocaleDateString(), form.value.rooms);
      this.router.navigate(['/servicefinal']);
    } else if ( form.value.serviceName === 'Cooking') {
      this.cartService.readCooking(form.value.serviceName, form.value.time, form.value.date.toLocaleDateString(), form.value.persons, form.value.groceries);
      this.router.navigate(['/servicefinal']);
    }
  }

  ngOnInit() {
  }
}
