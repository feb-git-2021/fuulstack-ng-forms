import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div class="container">
    <h3>{{title}}</h3>
     <img src="./assets/images/homeimg.jpeg"
      title="GardenTools" alt="GardenTools" class="img-fluid" hei>
    </div>
  `,
  styles: []
})
export class HomeComponent implements OnInit {
title='Product Application'
  constructor() { }

  ngOnInit(): void {
  }

}
