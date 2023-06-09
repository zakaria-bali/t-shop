import { ShoppingCartShell } from './shopping-cart.shell';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'shopping-cart',
    component: ShoppingCartShell,
    title: 'T-Shop | Shopping Cart'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShoppingCartRoutingModule { }
