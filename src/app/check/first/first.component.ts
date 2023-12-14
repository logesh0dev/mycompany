import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { EmpservService } from '../empserv.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  employeesearch:FormGroup;
  empdata:any;


  inputdropdowndata=[
    {id:'name',name:'Name'},
    {id:'age',name:'Age'},
    {id:'gender',name:'Gender'},
    {id:'mail',name:'Mail'},
    {id:'phno',name:'Mobile'},
    {id:'address',name:'Address'},
  ]

  constructor(private fb:FormBuilder,private empserv:EmpservService,private router:Router) { }

  ngOnInit(): void {

    this.empdata=this.empserv.employeedata

    this.employeesearch= this.fb.group({
      emp: [''],
      searchselect:[this.inputdropdowndata[0]],
    })

  }

  search(){
    console.log('name',this.employeesearch.value.emp)

    console.log('ssss',this.employeesearch.value.searchselect)

    let str=this.employeesearch.value.emp.toLowerCase();
    let opt=this.employeesearch.value.searchselect.id
    console.log('asdf',str,opt)
    this.empdata = this.empserv.employeedata.filter((data) =>  data[opt].toLowerCase().includes(str))
    console.log(this.employeesearch.value.emp,this.empdata)

  }

  closesearch(){
    this.employeesearch.get('emp').setValue('')
    this.empdata=this.empserv.employeedata
  }

  changeselectoption(value){
    console.log(value)
    this.employeesearch.get('searchselect').setValue(value)
  }


  routetoemployee(){
    this.router.navigate(['check/employee'])
  }

  editemployee(value){
    console.log('asdf',value,btoa(value.id))
    this.router.navigate(['check/employee'], { queryParams: { empid: value.id}})

  }

  delete(i){
    
    this.empserv.employeedata.splice(i,1)
    this.empdata=this.empserv.employeedata
    
    console.log(this.empdata)
  }
}
