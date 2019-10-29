import { Time } from '@angular/common';

export interface Service {
  status: string;
  profileId: string;
  _id: string;
  serviceName: string;
   time: Time;
   date: string;
   drug: string;
   persons: number;
   rooms: number;
   groceries: string;
   empId: string;
}

export interface Employee {
  _id: string;
  empName: string;
  empAge: number;
  empGender: number;
  empCook: number;
  empClean: number;
  empPhar: number;
  status: number;
}

