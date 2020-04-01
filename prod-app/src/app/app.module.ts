import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import {RouterModule} from '@angular/router'
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {ToastrModule} from 'ngx-toastr'
import { ProductModule } from './products/product.module';

import { AppComponent } from './app.component';
import {Test} from './test/test.component';
import { Test1Component } from './test/test1.component';
import { HomeComponent } from './home/home.component';
import { StarComponent } from './shared/star.component';
import { AddHeaderInterceptorService } from './products/interceptors/add-header-interceptor.service';



@NgModule({
  declarations: [
    AppComponent,    
    HomeComponent,
    Test,
    Test1Component,   
    
  ],
  imports: [
    BrowserModule,    
    HttpClientModule,
    RouterModule.forRoot([
      {path:'home',component:HomeComponent},      
      {path:'',redirectTo:'home',pathMatch:'full'},
      {path:'**',redirectTo:'home',pathMatch:'full'}      
    ]),
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass:'top-right',
      closeButton:true
    }),
    ProductModule
  ],
  providers: [
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
