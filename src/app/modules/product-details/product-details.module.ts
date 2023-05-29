import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductDetailsRoutingModule } from './product-details-routing.module';
import { ProductDetailsShell } from './product-details.shell';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { ReviewComponent } from './components/review/review.component';
import { ReviewsListComponent } from './components/reviews-list/reviews-list.component';
import { RelatedProductListComponent } from './components/related-product-list/related-product-list.component';
import { RelatedProductComponent } from './components/related-product/related-product.component';


@NgModule({
  declarations: [
    ProductDetailsShell,
    ProductDetailsComponent,
    ReviewComponent,
    ReviewsListComponent,
    RelatedProductListComponent,
    RelatedProductComponent
  ],
  imports: [
    CommonModule,
    ProductDetailsRoutingModule,
    SharedModule,
     FormsModule
  ]
})
export class ProductDetailsModule { }
