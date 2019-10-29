import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CartService } from '../servicespage/cart.service';
import { Service } from '../servicespage/cart.model';
import { Employee } from '../servicespage/cart.model';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders: Service[];
  emp: Employee[];
  empName: string;
  empAge: number;
  empGender: string;
  empId: string;
  constructor(private cartService: CartService, private changeDetector: ChangeDetectorRef) {
    this.orders = [];
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
        else (this.emp[i].empGender === 1)
          this.empGender = 'Female';
      }
    }
    return this.empGender;
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
  }
  ngOnInit() {
    this.getData();
    this.getEmployees();
  }

  private getData() {
    this.cartService.getOrders().subscribe(data => this.orders = data);

    this.changeDetector.detectChanges();
  }
  private getEmployees() {
    this.cartService.getEmployeesAll().subscribe(data => this.emp = data);
    this.changeDetector.detectChanges();
  }
}
