import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router'
import { ProductListComponent } from './product-list.component';
import { ProductDetailGuard } from './product-detail.guard';
import { ProductDetailComponent } from './product-detail.component';
import { ProductResolverService } from './resolvers/product-resolver.service';
import { ProductDetailResolverService } from './resolvers/product-detail-resolver.service';
import { ProductEditComponent } from './product-edit.component';
import { ProductEditGuard } from './product-edit.guard';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([      
    //  {path:'customersT',component:CustomerTemplateComponent},
    //  {path:'customersR',component:CustomerReactiveComponent},
      {path:'products',component:ProductListComponent,
      resolve:{resolveProducts:ProductResolverService}},
      {path:'product/:id',
      canActivate:[ProductDetailGuard],
      component:ProductDetailComponent,
      resolve:{resolveProdDetail:ProductDetailResolverService}
     },
     {
       path:'products/:id/edit',      
       component:ProductEditComponent

     }
    ])
  ],
  exports:[RouterModule]
})
export class ProductRoutingModule { }


