import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { EmployeeComponent } from './employee/employee.component';


const routes: Routes = [
  {path:'',children:[
    {path:"first",component:FirstComponent},
    {path:"employee",component:EmployeeComponent}

  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckRoutingModule { }
