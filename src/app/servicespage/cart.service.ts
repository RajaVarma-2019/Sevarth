import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Time } from '@angular/common';
import { Service, Employee } from './cart.model';
import { throwToolbarMixedModesError } from '@angular/material';

@Injectable({providedIn: 'root'})

export class CartService {

  profileId: string;
  orders: Service[];
   id: string;
   serviceName: string;
   time: Time;
   date: string;
   drug: string;
   persons: number;
   rooms: number;
   groceries: boolean;

   empName: string;
   empAge: number;
   empGender: number;
   empCook: number;
   empClean: number;
   empPhar: number;
  constructor(private http: HttpClient) {
    this.orders = [];
  }

  readPharamacy(serviceName: string, time: Time, date: string, drug: string) {
    this.serviceName = serviceName;
    this.time = time;
    this.date = date;
    this.drug = drug;
    const service = { id: null, profileId: this.profileId, serviceName: serviceName, time: time, date: date, drug: drug, rooms: null, persons: null, groceries: null };
    this.http.post<{message: string, postId: string}>('http://localhost:3000/api/services', service)
      .subscribe((responseData) => {
        this.id = responseData.postId;
      });
  }

  readCooking(serviceName: string, time: Time, date: string, persons: number, groceries: boolean) {
    this.serviceName = serviceName;
    this.time = time;
    this.date = date;
    this.persons = persons;
    this.groceries = groceries;
    const service = { id: null, profileId: this.profileId, serviceName: serviceName, time: time, date: date, drug: null, rooms: null, persons: persons, groceries: groceries };
    this.http.post<{message: string, postId: string}>('http://localhost:3000/api/services', service)
      .subscribe((responseData) => {
        this.id = responseData.postId;
      });
  }

  readCleaning(serviceName: string, time: Time, date: string, rooms: number) {
    this.serviceName = serviceName;
    this.time = time;
    this.date = date;
    this.rooms = rooms;
    const service = { id: null, profileId: this.profileId, serviceName: serviceName, time: time, date: date, drug: null, rooms: rooms, persons: null, groceries: null };
    this.http.post<{message: string, postId: string}>('http://localhost:3000/api/services', service)
      .subscribe((responseData) => {
        this.id = responseData.postId;
      });
  }

  getOrders() {
    return this.http.get<Service[]>(`http://localhost:3000/api/orders/${this.profileId}`);
      // .subscribe(responseData => {
      //   this.orders = responseData;
      //   }
      // );
  }

  getOrdersAll() {
    return this.http.get<Service[]>(`http://localhost:3000/api/orders`);
  }

  getEmployeesAll() {
    return this.http.get<Employee[]>('http://localhost:3000/api/employees');
  }

  updateStatus(id: string, employeeId: string) {
    return this.http.patch(`http://localhost:3000/api/orders/update/${id}`, {empId: employeeId});
  }

  updateEmployeeStatus(employeeId: string) {
    return this.http.patch(`http://localhost:3000/api/employees/update/${employeeId}`, null);
  }

  cancelOrder(id: string) {
    return this.http.patch(`http://localhost:3000/api/orders/cancel/${id}`, null);
  }

  cancelEmployee(id: string) {
    return this.http.patch(`http://localhost:3000/api/employees/cancel/${id}`, null);
  }

  addEmployee(empName: string, empAge: number, empGender: number, empCook: number, empClean: number, empPhar: number) {
    this.empName = empName;
    this.empAge = empAge;
    this.empGender = empGender;
    this.empCook = empCook;
    this.empClean = empClean;
    this.empPhar = empPhar;
    const emp = { empName: this.empName, empAge: this.empAge, empGender: this.empGender, empCook: this.empCook, empClean: this.empClean, empPhar: this.empPhar, status: 0 }
    this.http.post<{message: string, empId: string}>('http://localhost:3000/api/employee/add', emp)
      .subscribe((responseData) => {
        console.log(responseData);
      });
  }
}
