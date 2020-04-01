import { Component, OnInit, OnDestroy, AfterViewInit, ViewChildren, ElementRef } from '@angular/core';
import { FormGroup,FormBuilder, Validators, AbstractControl,ValidatorFn, FormControlName } from '@angular/forms';
import {NumberValidators} from '../shared/number.validator'
import { IProduct } from './product';
import { Subscription, Observable, fromEvent, merge } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './product.service';
import { GeneralValidator } from '../shared/general-validator';
import { debounceTime } from 'rxjs/operators';
import {ToastrService} from 'ngx-toastr'


@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit,AfterViewInit,OnDestroy {
 @ViewChildren(FormControlName,{read :ElementRef}) formInElements:ElementRef[]  
productForm:FormGroup
pageTitle:string='ProductEdit'
errorMessage:string
product:IProduct
private sub:Subscription
displayMessage:{[key:string]:string}={}
private _validationMsgs:{[key:string]:{[key:string]:string}}
private _genValidator:GeneralValidator
    
  constructor(private _fb:FormBuilder,
    private _activatedRoute:ActivatedRoute,
    private _router:Router,
    private _productService:ProductService,
   private _toastrService:ToastrService ) { 
      this._validationMsgs={
        productName:{
          required:'Product Name is required',
          minlength:'Product Name must be at contain least three characters',
          maxlength:'Product Name must not be more than twenty characters '
        },
        productCode:{
          required:'Product Code is required'
        },
        price:{
          required:'Product price is required'
        },
        starRating:{
          range:'Rating should be a value between 1 and 5 only'
        }
      }
      this._genValidator = new GeneralValidator(this._validationMsgs)
    }

    //Generic validation message Class
    



  ngOnInit(): void {
    this.productForm= this._fb.group({
      productName:['',[Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20)]],
        productCode:['',Validators.required],
        releaseDate:[''],
       price:['',[Validators.required]],
       starRating:['', [NumberValidators.range(1,5)]],
       imageUrl:[''],
       description:['',[Validators.required]]
        
    })
    //Reading the productId from the route parameter
    this.sub=this._activatedRoute.params.subscribe(
     params=>{
       const id = +params['id']
       this.getProduct(id)
     } 
    )

  }
  successMsg(){
    this._toastrService.success('Success messsage...')
  }
  getProduct(id:number):void{
    this._productService.getProduct(id)
    .subscribe({
      next:(product:IProduct)=>this.displayProduct(product),
      error:err=>this.errorMessage=err
    })
  }

  displayProduct(product:IProduct):void{
    if(this.productForm){
      this.productForm.reset()
    }
    this.product=product
    if(this.product.id === 0){
      this.pageTitle='Add Product'
    }else{
      this.pageTitle=`Edit Product : ${this.product.productName}`
    }

//update the data on the form
this.productForm.patchValue({
  productName:this.product.productName,
  productCode:this.product.productCode,
  price:this.product.price,
  starRating:this.product.starRating,
  description:this.product.description

})


  }
  saveProduct():void{
    if(this.productForm.valid){
      if(this.productForm.dirty){
      const p ={...this.product,...this.productForm.value}
      if(p.id===0){
        this._productService.addProduct(p)
        .subscribe({
          next:()=>this.onSaveComplete(),
          error:err=>this.errorMessage=err
        })

      }else{
        this._productService.updateProduct(p)
        .subscribe({
          next:()=>this.onSaveComplete(),
          error:err=>this.errorMessage=err
        })
      }

    } 
  }
}
deleteProduct():void{
  if(this.product.id===0){
    this.onSaveComplete()
  }else{
    if(confirm(`Do you want to delete the product : ${this.product.productName}?`)){
      this._productService.deleteProduct(this.product.id)
      .subscribe({
        next:()=>this.onSaveComplete(),
        error:err=>this.errorMessage=err
      })
    }
  }
}
  onSaveComplete():void{
    this.productForm.reset()
    this._router.navigate(['/products'])
  }

  ngAfterViewInit():void{
    const controlBlurs:Observable<any>[]=this.formInElements
    .map((formControl:ElementRef) =>fromEvent(formControl.nativeElement,'blur'))
    merge(this.productForm.valueChanges, ...controlBlurs)
    //.pipe(
     // debounceTime(800))
    .subscribe(value=>{
      this.displayMessage=this._genValidator.processMsgs(this.productForm)
    })
  }

  ngOnDestroy():void{
    this.sub.unsubscribe()
  }
  

}
