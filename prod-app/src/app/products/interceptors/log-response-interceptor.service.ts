import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent,HttpEventType, HttpRequest, HttpHandler } 
from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LogResponseInterceptorService implements HttpInterceptor {


  constructor() { }


  intercept(req:HttpRequest<any>,next:HttpHandler):Observable<HttpEvent<any>>{
    console.log(`Log Response Interceptor : ${req.url}`)
    return next.handle(req)
    .pipe(
      tap(event=>{
        if(event.type === HttpEventType.Response){
          console.log(event.body)
        }
      })
    )
  }
}
