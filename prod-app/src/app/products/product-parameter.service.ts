import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ProductParameterService {
  showImg:boolean
  filterBy:string

  constructor() { }
}
