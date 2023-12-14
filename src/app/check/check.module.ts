import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckRoutingModule } from './check-routing.module';
import { FirstComponent } from './first/first.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../material/material.module';
import { EmployeeComponent } from './employee/employee.component';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [FirstComponent, EmployeeComponent],
  imports: [
    CommonModule,
    CheckRoutingModule,
    FormsModule,ReactiveFormsModule,MaterialModule,ToastrModule
  ]
})
export class CheckModule { }
