import { TestBed }  from "@angular/core/testing" ;
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { EmployeeComponent } from "./employee.component";

describe('employee screen', () => {
  beforeEach( ()=> {
    TestBed.configureTestingModule({
      declarations:[EmployeeComponent],
      imports:[FormsModule,ReactiveFormsModule],

    }).compileComponents;
  })
})  


beforeEach(()=>{
  var fixture=TestBed.createComponent(EmployeeComponent)
  var comp = fixture.componentInstance
  fixture.detectChanges()

})

it('test formgroup',()=>{
  const text= fixture.debugElement.nativeElement.querySelector('#employeeform')
  const inputelement=text.querySelectorAll('input');
  expect(inputelement.length).toEqual(2)
})