import { Component, OnInit } from '@angular/core';
import { Customer } from './customer';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-customer-template',
  templateUrl: './customer-template.component.html',
  styleUrls: ['./customer-template.component.css']
})
export class CustomerTemplateComponent implements OnInit {
customer:Customer= new Customer() //created instance of Customer class
  constructor() { }

  ngOnInit(): void {
  }

  save(custTForm:NgForm):void{
    console.log(custTForm)
    console.log(`Saved : ${JSON.stringify(custTForm.value)}`)
  }

}
