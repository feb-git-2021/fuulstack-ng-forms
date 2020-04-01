import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarComponent } from './star.component';
import { CriteriaComponent } from './criteria.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    StarComponent,
    CriteriaComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    StarComponent,
    CriteriaComponent,
    CommonModule,
    FormsModule

  ]
})
export class SharedModule { }
