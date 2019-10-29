import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatInputModule,
        MatFormFieldModule,
        MatSelectModule,
        MatDatepickerModule,
        MatCardModule,
        MatNativeDateModule,
        MatButtonModule,
        MatListModule,
        MatRadioModule,
        MatSliderModule,
        MatSlideToggleModule,
        MatExpansionModule,
        MatBadgeModule,
        MatTabsModule,
        MatCheckboxModule} from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { TeamComponent } from './team/team.component';
import { ConnectComponent } from './connect/connect.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SocialComponent } from './social/social.component';
import { FooterComponent } from './footer/footer.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule, NgControl, ReactiveFormsModule } from '@angular/forms';
import { ServiceNavBarComponent } from './servicespage/service-nav-bar/service-nav-bar.component';
import { ServiceAddressComponent } from './servicespage/service-address/service-address.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SecondformComponent } from './servicespage/secondform/secondform.component';
import { AdminComponent } from './admin/admin.component';
import { ServicehomeComponent } from './servicespage/servicehome/servicehome.component';
import { ServiceamComponent } from './servicespage/serviceam/serviceam.component';
import { OrdersComponent } from './orders/orders.component';
import { AddEmpComponent } from './add-emp/add-emp.component';
import { EmpComponent } from './emp/emp.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AboutComponent,
    TeamComponent,
    ConnectComponent,
    NavbarComponent,
    SocialComponent,
    FooterComponent,
    SignupComponent,
    ServiceNavBarComponent,
    ServiceAddressComponent,
    SecondformComponent,
    AdminComponent,
    ServicehomeComponent,
    ServiceamComponent,
    OrdersComponent,
    AddEmpComponent,
    EmpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    MatCardModule,
    MatNativeDateModule,
    MatButtonModule,
    HttpClientModule,
    MatListModule,
    MatRadioModule,
    MatSliderModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    MatExpansionModule,
    MatBadgeModule,
    MatTabsModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
