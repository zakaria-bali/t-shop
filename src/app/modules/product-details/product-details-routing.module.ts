import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsShell } from './product-details.shell';

const routes: Routes = [
  {
    path: ':id',
    component: ProductDetailsShell
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductDetailsRoutingModule { }
