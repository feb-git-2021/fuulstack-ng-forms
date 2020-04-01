import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder,Validators } from '@angular/forms';
import { Customer } from './customer';

@Component({
  selector: 'app-customer-reactive',
  templateUrl: './customer-reactive.component.html',
  styleUrls: ['./customer-reactive.component.css']
})
export class CustomerReactiveComponent implements OnInit {
custRForm:FormGroup
//customer:Customer= new Customer()
  //OR
 customer= new Customer() 
  constructor(private _fb:FormBuilder) { }

  // ngOnInit(): void {
  //   this.custRForm= new FormGroup({
  //     firstName:new FormControl(),
  //     lastName:new FormControl(),
  //     email:new FormControl()
     

  //   })
  // }
  //using Form builder Service
  ngOnInit():void{
    this.custRForm= this._fb.group({
      firstName:['',[Validators.required,Validators.minLength(3)]],
      lastName:['',[Validators.required,Validators.maxLength(20)]],
     // lastName:{value:'Smith',disabled:true},
      email:['',[Validators.email]]
    })
  }
  save(){
    console.log(this.custRForm)
    console.log(`Saved : ${JSON.stringify(this.custRForm.value)}`)

  }
  // showInitData():void{
  //   this.custRForm.setValue({
  //     firstName:'David',
  //     lastName:'Smith',
  //     email:'david@smith.com'
  //   })
  // }

  showInitData():void{
    this.custRForm.patchValue({
      firstName:'David',
      lastName:'Smith'
     
    })
  }

}
