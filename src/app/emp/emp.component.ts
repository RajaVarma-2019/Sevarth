import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CartService } from '../servicespage/cart.service';
import { Employee } from '../servicespage/cart.model';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent implements OnInit {
  emp: Employee[];
  constructor(private cartService: CartService, private changeDetector: ChangeDetectorRef) { }

  ngOnInit() {
    this.getData();
  }

  private getData() {
    this.cartService.getEmployeesAll().subscribe(data => this.emp = data);

    this.changeDetector.detectChanges();
  }
}
