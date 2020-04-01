import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  title:string='ProductDetail'
  product:IProduct
  errorMessage:string
  constructor(private _activatedRoute:ActivatedRoute,
    private _router:Router,
    private _productService:ProductService
    ) { 
      this.product=this._activatedRoute.snapshot.data['resolveProdDetail']
    }

  ngOnInit(): void {

    const param = this._activatedRoute.snapshot.paramMap.get('id')
    if(param){
      const id:number = +param
      this.getProduct(id)
    }

  }

  getProduct(id:number){
    this. _productService.getProduct(id)
    .subscribe(
      (product)=>this.product =product,
      (error)=>this.errorMessage=<any>error,
      ()=>console.log(`Single product subscription completed ${this.product}`)

    )
  }
  onBack():void{
    this._router.navigate(['/products'])
  }

}
