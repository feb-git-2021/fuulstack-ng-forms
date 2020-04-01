import { Injectable } from '@angular/core';
import {Resolve,ActivatedRouteSnapshot,
  RouterStateSnapshot} from '@angular/router'
  import {Observable,of} from 'rxjs'
  import { IProduct } from '../product';
import { ProductService } from '../product.service';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailResolverService implements Resolve<IProduct> {

  constructor(private _productService:ProductService) { }
  resolve(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):Observable<IProduct>{
    const id = route.paramMap.get('id')
    if(isNaN(+id)){
      const message =` Product id was not a number :${id}`
      console.error(message);
      return of(null);
      
      }
      
    
    return this._productService.getProduct(+id)

  }
}
