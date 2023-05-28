import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductDetailsRoutingModule } from './product-details-routing.module';
import { ProductDetailsShell } from './product-details.shell';


@NgModule({
  declarations: [
    ProductDetailsShell
  ],
  imports: [
    CommonModule,
    ProductDetailsRoutingModule
  ]
})
export class ProductDetailsModule { }
