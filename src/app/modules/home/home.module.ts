import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeShell } from './home.shell';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductListComponent } from './components/product-list/product-list.component';
import { FormsModule } from '@angular/forms';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  declarations: [HomeShell, ProductCardComponent, ProductListComponent],
  imports: [HomeRoutingModule, FormsModule, CoreModule, SharedModule],
})
export class HomeModule {}
