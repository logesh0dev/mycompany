import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { EmpservService } from '../empserv.service';
import { ToastrService } from 'ngx-toastr';
import { NotificationService } from 'src/app/notification.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {


  employeeform: FormGroup;


  genderdata = [
    { name: 'Male' },
    { name: 'Female' }
  ]
  employeeid: any;


  constructor(private fb: FormBuilder, private empserv: EmpservService, private notification: NotificationService, private router: Router
    , private activatedroute: ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedroute.queryParams.subscribe((params: Params) => {
      console.log('empid', params, params.empid)
      this.employeeid = params.empid;
    });

    this.empserv.getemployeedata()

    this.employeeform = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(15)]],
      age: ['', [Validators.required, Validators.pattern(/^\S[0-9]{0,3}$/)]],
      gender: ['', [Validators.required]],
      phno: ['', [Validators.required, Validators.pattern(/^[6-9]{1}[0-9]{9}$/)]],
      mail: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")]],
      address: ['', [Validators.required]],
      id: ['']
    })


    if (this.employeeid) {
      console.log(this.employeeid)
      this.editemployee(this.employeeid)
    }

  }

  submitForm() {


    let obj = {
      id: (this.employeeform.value.id) ? this.employeeform.value.id : this.empserv.employeedata.length + 1,
      name: this.employeeform.value.name,
      age: String(this.employeeform.value.age),
      phno: String(this.employeeform.value.phno),
      mail: this.employeeform.value.mail,
      gender: this.employeeform.value.gender,
      status: 1,
      address: this.employeeform.value.address,

    }

    if (this.employeeid) {
      this.empserv.employeedata = this.empserv.employeedata.map(u => u.id !== obj.id ? u : obj);
      this.notification.showSuccess('Successfully Employee Updated')
      this.router.navigate(['check/first'])


    }
    else {
      console.log(obj)
      this.empserv.employeedata.push(obj)
      this.notification.showSuccess('Successfully Employee Created')
      this.router.navigate(['check/first'])
    }



  }

  cancel() {
    this.router.navigate(['check/first'])
   
  }

  editemployee(empid) {
    let empidvalue: any = this.empserv.employeedata.filter((value) => value.id == empid)[0]
    console.log(empid, empidvalue)


    this.employeeform.patchValue({
      "name": empidvalue.name,
      "age": empidvalue.age,
      "gender": empidvalue.gender,
      "phno": empidvalue.phno,
      "mail": empidvalue.mail,
      "address": empidvalue.address,
      "id": empidvalue.id
    })

  }

}
