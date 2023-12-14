import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmpservService {

  constructor(private http:HttpClient) { }

  employeedata=[
    {id:1,name:'Suresh',age:'34',phno:'9809980999',mail:'suresh@gmail.com',gender:'Male',status:1,address:'154/34, pillayar koil street, Thiruvanmiyur, Chennai'},
    {id:2,name:'Vignesh',age:'29',phno:'8767676656',mail:'vignesh@gmail.com',gender:'Male',status:1,address:'199/26, kasi koil street, Taramani, Chennai'},
    {id:3,name:'Santhosh',age:'26',phno:'9987987989',mail:'santhosh@gmail.com',gender:'Male',status:1,address:'133/11, Gandhi street, Tiruverkadu, Chennai'},
    {id:4,name:'Sanjay',age:'28',phno:'9889897229',mail:'sanjay@gmail.com',gender:'Male',status:1,address:'365/99, NGK street, Puzhithivakkam, Chennai'},
    {id:5,name:'Thivya',age:'28',phno:'7676532123',mail:'thivya@gmail.com',gender:'Female',status:1,address:'398/29, lkg street, gopalapuram, Chennai'},

  ] 
 
  getemployeedata(): Observable<any>{
    const value=this.http.get<any>("https://dummy.restapiexample.com/api/v1/employees")
    console.log(value);
    
    return this.http.get<any>("https://dummy.restapiexample.com/api/v1/employees")
  }

}
