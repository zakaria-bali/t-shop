import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroModule } from './ng-zorro/ng-zorro.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { IncrementDecrementComponent } from './components/increment-decrement/increment-decrement.component';
import { FormsModule } from '@angular/forms';
import { SimpleProductCardComponent } from './components/simple-product-card/simple-product-card.component';
import { RouterModule } from '@angular/router';
import { ShepherdComponent } from './components/shepherd/shepherd.component';

@NgModule({
  declarations: [ToolbarComponent, FooterComponent, IncrementDecrementComponent, SimpleProductCardComponent, ShepherdComponent],
  imports: [CommonModule, NgZorroModule, FormsModule, RouterModule],
  exports: [CommonModule, NgZorroModule, ToolbarComponent, FooterComponent, IncrementDecrementComponent, SimpleProductCardComponent],
})
export class SharedModule {}
