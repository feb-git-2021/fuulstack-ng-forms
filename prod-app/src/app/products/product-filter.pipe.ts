import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from './product';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(value: IProduct[], filterWith:string): 
  IProduct[] {
    filterWith=filterWith?filterWith.toLocaleLowerCase():null

    return filterWith ? value.filter((product:IProduct)=>
      product.productName.toLocaleLowerCase()
      .indexOf(filterWith)!==-1):value
    
    }
    
  }







