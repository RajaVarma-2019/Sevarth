import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CartService } from '../servicespage/cart.service';
import { Service } from '../servicespage/cart.model';
import { DatePipe } from '@angular/common';
import { Employee } from '../servicespage/cart.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  empName: string;
  empAge: number;
  empGender: string;
  orders: Service[];
  emp: Employee[];
  empId: string;
  datePipe = new DatePipe('en-US');
  constructor(private cartService: CartService, private changeDetector: ChangeDetectorRef) {
    this.orders = [];
  }

  updateStatus(id: string, employeeId: string) {
    this.cartService.updateStatus(id, employeeId).subscribe(response => {
      console.log(`Respone received : ${response}`);
      this.getData();
    });
    this.cartService.updateEmployeeStatus(employeeId).subscribe(response => {
      console.log(`Response received : ${response}`);
      this.getEmployees();
    });

  }

  cancelOrder(id: string) {
    this.cartService.cancelOrder(id).subscribe(respose => {
      console.log(`Respone received : ${respose}`);
      this.getData();
    });
  }

  cancelOrderAfterConfirm(id: string) {
    this.cartService.cancelOrder(id).subscribe(respose => {
      console.log(`Respone received : ${respose}`);
      this.getData();
    });
    for(var i = 0; i<this.orders.length; i++) {
      if (this.orders[i]._id === id) {
        this.empId = this.orders[i].empId;
      }
    }
    this.cartService.cancelEmployee(this.empId).subscribe(response => {
      console.log(`Response received : ${response}`);
      this.getEmployees();
    });
  }

  getEmployeeName(id: string) {
    for(var i = 0; i<this.emp.length; i++) {
      if (this.emp[i]._id === id) {
        this.empName = this.emp[i].empName;
      }
    }
    return this.empName;
  }

  getEmployeeAge(id: string) {
    for(var i = 0; i<this.emp.length; i++) {
      if (this.emp[i]._id === id) {
        this.empAge = this.emp[i].empAge;
      }
    }
    return this.empAge;
  }

  getEmployeeGender(id: string) {
    for(var i = 0; i<this.emp.length; i++) {
      if (this.emp[i]._id === id) {
        if(this.emp[i].empGender === 1)
          this.empGender = 'Male';
        else
          this.empGender = 'Female';
      }
    }
    return this.empGender;
  }


  ngOnInit() {
    this.getData();
    this.getEmployees();
  }

  private getData() {
    this.cartService.getOrdersAll().subscribe(data => this.orders = data);
    this.changeDetector.detectChanges();
  }

  private getEmployees() {
    this.cartService.getEmployeesAll().subscribe(data => this.emp = data);
    this.changeDetector.detectChanges();
  }

}
