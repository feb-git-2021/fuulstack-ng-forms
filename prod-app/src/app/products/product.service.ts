import { Injectable } from '@angular/core';
import { IProduct } from './product';
import { HttpClient, HttpHeaders, HttpRequest, HttpHandler } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import {map,catchError, tap} from 'rxjs/operators'
import { AddHeaderInterceptorService } from './interceptors/add-header-interceptor.service';

@Injectable({
  providedIn: 'root'
})
//@Injectable()
export class ProductService {

  //productsUrl:string='./assets/api/data/products.json'
  //after faking the Products data in ProductData class
  productsUrl:string='api/products'
  products:IProduct[] 

 
  

  constructor(private _httpClient:HttpClient){}
  
  // getProducts():IProduct[]{
  //   return this.products
  // }

  getProducts():Observable<IProduct[]>{
 
    return this._httpClient.get<IProduct[]>(this.productsUrl)
    .pipe(
      tap((data)=>console.log(`Full Product List : ${JSON.stringify(data)}`)),
      catchError(this.handleError)
    )
  }
  // getProducts(){
 
  //  console.log( this._httpClient.get<IProduct[]>(this.productsUrl).toPromise())
  // }


  //retreiving Single Product
  getProduct(id:number):Observable<IProduct>{
   if(id ===0){
     return of(this.initializeProduct())
   }
   const url =`${this.productsUrl}/${id}`
   return this._httpClient.get<IProduct>(url)
   .pipe(
     tap(data=>console.log('Get Product With Id :' + JSON.stringify(data))),
     catchError(this.handleError)
   )
   
  }
  updateProduct(product:IProduct):Observable<IProduct>{
    const headers = new HttpHeaders({'Content-Type':'application/json'})
    //const headers =this._intercepService.intercept(req:HttpRequest<any>,next:HttpHandler)
    const url =`${this.productsUrl}/${product.id}`
    return this._httpClient.put<IProduct>(url,product,{headers})
    .pipe(
      tap(()=>console.log(`Update Product : ${product.id}`)),
      catchError(this.handleError)
    )
  }
  addProduct(product:IProduct):Observable<IProduct>{
    const headers = new HttpHeaders({'Content-Type':'application/json'})
    product.id=null;
    return this._httpClient.post<IProduct>(this.productsUrl,product,{headers})
.pipe(
  tap(data=>console.log(`Added one product : ${JSON.stringify(data)}`)),
  catchError(this.handleError)
)
  }

  deleteProduct(id:number):Observable<IProduct>{
    const headers = new HttpHeaders({'Content-Type':'application/json'})
    const url =`${this.productsUrl}/${id}`
    return this._httpClient.delete<IProduct>(url,{headers})
    .pipe(
      tap(data=>console.log(`Product deleted : ${id}`)),
      catchError(this.handleError)

    )

  }

 private handleError(err):Observable<any>{
   let errorMsg:string =''
   if(err.error instanceof Error){
      errorMsg=`An error occured :${err.error.message}`
   }else{
     errorMsg=`Server returned code : ${err.status} 
     error message is ${err.message}`
   }
   console.log(errorMsg)
   return throwError(errorMsg)
 }

 initializeProduct():IProduct{
   return{
    id:0,
    productName:null,
    productCode:null,
    releaseDate:null,
    price:0,
    description:null,
    starRating:0,
    imageUrl:null

   }
  

 }

// getProduct(id:number):Observable<IProduct>{
//   return this.getProducts()
//   .map((products:IProduct[])=>products.find((p)=>p.productId===id))
//   .tap()
//   .catchError()

// }
 }


//  let arr =[4,5,6,7,8,10]
//  let res= arr.map(e=>e%2===0)
//  console.log(res)

