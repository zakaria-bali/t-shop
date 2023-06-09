import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingCartRoutingModule } from './shopping-cart-routing.module';
import { ShoppingCartShell } from './shopping-cart.shell';
import { CartComponent } from './components/cart/cart.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { ShoppingCartFeature } from './state';

@NgModule({
  declarations: [
    ShoppingCartShell,
    CartComponent,
    CartItemComponent
  ],
  imports: [
    CommonModule,
    ShoppingCartRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature(ShoppingCartFeature),
  ]
})
export class ShoppingCartModule { }
