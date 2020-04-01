import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpRequest, HttpHandler } 
from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class AddHeaderInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req:HttpRequest<any>,next:HttpHandler):Observable<HttpEvent<any>>{
      console.log(`Added HeaderInterceptor - ${req.url}`)
      let jsonReq:HttpRequest<any> = req.clone({
        setHeaders:{'Content-Type':'application/json'}
      })
      return next.handle(jsonReq)
  }
}
