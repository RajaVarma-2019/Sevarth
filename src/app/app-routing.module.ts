import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ConnectComponent } from './connect/connect.component';
import { TeamComponent } from './team/team.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ServiceAddressComponent } from './servicespage/service-address/service-address.component';
import { ServiceNavBarComponent } from './servicespage/service-nav-bar/service-nav-bar.component';
import { ServicehomeComponent } from './servicespage/servicehome/servicehome.component';
import { AdminComponent } from './admin/admin.component';
import { SecondformComponent } from './servicespage/secondform/secondform.component';
import { ServiceamComponent } from './servicespage/serviceam/serviceam.component';
import { OrdersComponent } from './orders/orders.component';
import { AddEmpComponent } from './add-emp/add-emp.component';
import { EmpComponent } from './emp/emp.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'connect', component: ConnectComponent },
  { path: 'team', component: TeamComponent },
  { path: 'services', component: ServiceAddressComponent},
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'signup', component: SignupComponent },
  { path: 'servicefinal', component: ServiceNavBarComponent},
  { path: 'servicehome', component: ServicehomeComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'servicetest', component: SecondformComponent },
  { path: 'serviceam', component: ServiceamComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'addEmp', component: AddEmpComponent },
  { path: 'employees', component: EmpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
