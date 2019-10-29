import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from '../servicespage/cart.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName = 'rajavarma.1729@gmail.com';
  password = 'RajaVarma';
  profileId = '1';
  flag = 0;
  constructor(private router: Router, private cartService: CartService) { }
  loginValidation(form: NgForm) {
    if ( form.value.username === this.userName && form.value.password === this.password) {
      this.flag = 0;
      this.cartService.profileId = this.profileId;
      this.router.navigate(['/home']);
    } else {
      this.flag = 1;
      return;
    }
  }


  ngOnInit() {
  }

}
