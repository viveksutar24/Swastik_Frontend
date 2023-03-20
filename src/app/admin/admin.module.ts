import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LandingComponent } from './landing.component';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';

import { FarmersComponent } from './farmers/farmers.component';
import { AdminComponent } from './admins/admin.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LandingComponent,
    DashboardComponent,
    AdminComponent,
    FarmersComponent,


  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule



  ]
})
export class AdminModule { }
