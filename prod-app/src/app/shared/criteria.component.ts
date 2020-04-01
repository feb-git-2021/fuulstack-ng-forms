import { Component, OnInit, AfterViewInit, ViewChild,
   ElementRef, Input, Output, EventEmitter } 
   from '@angular/core';

@Component({
  selector: 'app-criteria',
  templateUrl: './criteria.component.html',
  styleUrls: ['./criteria.component.css'],
 
})
export class CriteriaComponent implements OnInit,AfterViewInit {
@Input() displayDetail:boolean  
//listFilter:string
 @Input() hitCount:number
 @Output() valueChange:EventEmitter<string> =new EventEmitter<string>()
@ViewChild('filterElement') filterElementRef:ElementRef
  constructor() { }
  private _listFilter:string
  get listFilter():string{
    return this. _listFilter
  }
  set listFilter(value:string){
    this._listFilter=value
    this.valueChange.emit(value)
  }

  ngOnInit(): void {
  }
  ngAfterViewInit():void{
    if(this.filterElementRef){
    this.filterElementRef.nativeElement.focus()
    }
  }
  

}
//class Person{}
//Person per = new Person()


