import { Component, OnInit, ViewChild, AfterViewInit, 
  ElementRef, 
  ViewChildren} from 
'@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';
import { ActivatedRoute } from '@angular/router';
import { ProductParameterService } from './product-parameter.service';
import { CriteriaComponent } from '../shared/criteria.component';
import { LoggerService } from '../services/logger.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
  
})
export class ProductListComponent implements OnInit,AfterViewInit{
  title:string='Product Application!!'
  attendees:number=19
  imgWidth:number=50
  imgHeight:number=50
  //showImg:boolean=false
  //listFilter:string=''
  listName:string=''
  includeDetail:boolean=true
  errorMessage:string

  //USING @VIEWCHILD decorator by passing the name of the template ref variable
 //@ViewChild('filterElement') filterElementRef:ElementRef
 //@ViewChildren('filterElement,filterElementName') inputElementsRef

 //USING @VIEWCHILD decorator bay passing the name of the component as parameter
 @ViewChild(CriteriaComponent) filterComponent:CriteriaComponent
  
  products:IProduct[]
  filteredProducts: IProduct[]

  get showImg():boolean{
    return this._productParameter.showImg
  }
  set showImg(value:boolean){
    this._productParameter.showImg=value
  }


  constructor(private _productService:ProductService,
    private _productParameter:ProductParameterService,
    //private _logger:LoggerService,
    private _activatedRoute:ActivatedRoute) { 
    //console.log(`Input Reference @ constructor ${this.filterElementRef}`)
   //this._logger.log('Using the LoggerService in ProductListCompoment')
   
  }

  ngOnInit(): void { 
    
    
    // let resolvedData:IProduct[]=this._activatedRoute.snapshot.data['resolveProducts']
    // this.products=resolvedData
    
     this._productService.getProducts()
     .subscribe((data:IProduct[])=>{
       this.products=data;
       //this.performFilter()
       this.filterComponent.listFilter=this._productParameter.filterBy  
     }, 

     (error)=>this.errorMessage=<any>error,     
     ()=>console.log(`Subscription completed....`)
     )
     
     


    

     
     this.filteredProducts=this.products

    this.performFilter();
    
     
  }
  onRatingClicked(message: string): void {
    this.title = 'Product List: ' + message;
  }

  ngAfterViewInit():void{
    console.log('Child Component :' + this.filterComponent)
    //console.log(`Input Reference @ ngAfterViewInit() ${this.filterElementRef}`)
    //console.log(this.filterElementRef)
    //this.filterElementRef.nativeElement.focus()
    //console.log('All inputs...')
    //console.log(this.inputElementsRef)
  }
  performFilter(filterBy?: string): void {
    if (filterBy) {
      this.filteredProducts = this.products.filter((product: IProduct) =>
          product.productName.toLocaleLowerCase().indexOf(filterBy.toLocaleLowerCase()) !== -1);
  } else {
      this.filteredProducts = this.products;
  }
  }
  
onValueChange(value:string):void{
  this._productParameter.filterBy=value
  this.performFilter(value)
}
 

  toggleImage():void{
      this.showImg = !this.showImg
      console.log('clicked...')
  }

}
