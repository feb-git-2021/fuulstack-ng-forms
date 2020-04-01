import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpCacheService {

  constructor() { }
  private requests:any={}
//with put method the response will be cached
  put(url:string,response:HttpResponse<any>):void{
    this.requests[url]=response
  }
  get(url:string):HttpResponse<any>|undefined{ //get method here is getting items from the cache
    return this.requests[url]
  }

  invalidateUrl(url:string):void{
    this.requests[url]=undefined //making the url undefined
  }
  invalidateCache():void{
    this.requests={} //this remove all items from the cache
  }
}
