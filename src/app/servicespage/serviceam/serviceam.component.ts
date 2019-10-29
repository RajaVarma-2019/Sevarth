import { Component, OnInit } from '@angular/core';
import { NgForm, FormControl, Validators } from '@angular/forms';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-serviceam',
  templateUrl: './serviceam.component.html',
  styleUrls: ['./serviceam.component.css']
})
export class ServiceamComponent implements OnInit {


  constructor(public cartService: CartService, private router: Router) {}
  serviceNames = [ 'Cooking', 'Cleaning', 'Pharamacy' ];
  drugs = [ 'Dolo 650mg ', ' Cetirizine ', ' Aspirin ' ];
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
