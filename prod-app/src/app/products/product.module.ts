import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
;

import { ProductListComponent } from './product-list.component';
import { ProductFilterPipe } from './product-filter.pipe';
import { ConvertToSpacePipe } from '../shared/convert-to-space.pipe';


import { ProductDetailComponent } from './product-detail.component';
import { ProductRoutingModule } from './product-routing.module';
import { LoggerService } from '../services/logger.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AddHeaderInterceptorService } from './interceptors/add-header-interceptor.service';
import { LogResponseInterceptorService } from './interceptors/log-response-interceptor.service';
import { CacheInterceptor } from './interceptors/cache.interceptor';
import { CustomerTemplateComponent } from './customers/customer-template.component';
import { CustomerReactiveComponent } from './customers/customer-reactive.component';
import { ProductEditComponent } from './product-edit.component';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ProductData } from './product-data';






@NgModule({
  declarations: [
    ProductListComponent,
    ProductFilterPipe,
    ConvertToSpacePipe,    
    ProductDetailComponent, CustomerTemplateComponent, CustomerReactiveComponent, ProductEditComponent
  ],
  imports: [
    FormsModule,   
    ReactiveFormsModule, 
    InMemoryWebApiModule.forRoot(ProductData),   
    SharedModule,
    ProductRoutingModule,
   
       
   
  ],
  providers:[
    LoggerService,
    {provide:HTTP_INTERCEPTORS, useClass:AddHeaderInterceptorService,multi:true},
    {provide:HTTP_INTERCEPTORS, useClass:LogResponseInterceptorService,multi:true}
    //{provide : HTTP_INTERCEPTORS, useClass:CacheInterceptor, multi:true}
    
  ]
    //OR
   // {provide:LoggerService,useClass:LoggerService}
   //Using useClass
  // {provide :LoggerService,useClass:PlainLoggerService}
  //Using LoggerService with use existing
  // PlainLoggerService,
  // {provide:LoggerService,useExisting:PlainLoggerService}
    //Using LoggerService with use value
    //{provide:LoggerService,useValue:log: (logMsg)=>console.log(`Use Value log message ${logMsg}`),
   //error: (errMsg)=>console.log(`Use Value Error Message : ${errMsg}`)}

      //Using LoggerService with use factory
      
    

})
export class ProductModule { }






