import { Injectable } from '@angular/core';
import {Resolve,ActivatedRouteSnapshot,
  RouterStateSnapshot} from '@angular/router'
  import {Observable,of} from 'rxjs'
  import {catchError} from 'rxjs/operators'
  import {ProductService} from '../product.service'
import { IProduct } from '../product';

@Injectable({
  providedIn: 'root'
})
export class ProductResolverService implements Resolve<IProduct[]> {

  constructor(private _productService:ProductService) { }

  resolve(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):Observable<IProduct[]>{
    return this._productService.getProducts()
    
  }
}
