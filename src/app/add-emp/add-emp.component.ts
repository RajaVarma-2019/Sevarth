import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CartService } from '../servicespage/cart.service';
import { Employee } from '../servicespage/cart.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css']
})
export class AddEmpComponent implements OnInit {

  emp: Employee;

  constructor(private cartService: CartService, private router: Router) { }

  addEmp(form: NgForm) {
    this.cartService.addEmployee(form.value.empName, form.value.empAge, form.value.empGender, form.value.empCook, form.value.empClean, form.value.empPhar);
    this.router.navigate(['/employees']);
  }

  ngOnInit() {
  }

}
