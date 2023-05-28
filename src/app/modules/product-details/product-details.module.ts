import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductDetailsRoutingModule } from './product-details-routing.module';
import { ProductDetailsShell } from './product-details.shell';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProductDetailsShell,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    ProductDetailsRoutingModule,
    SharedModule,
     FormsModule
  ]
})
export class ProductDetailsModule { }
