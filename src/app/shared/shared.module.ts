import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroModule } from './ng-zorro/ng-zorro.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { IncrementDecrementComponent } from './components/increment-decrement/increment-decrement.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ToolbarComponent, FooterComponent, IncrementDecrementComponent],
  imports: [CommonModule, NgZorroModule, FormsModule],
  exports: [CommonModule, NgZorroModule, ToolbarComponent, FooterComponent, IncrementDecrementComponent],
})
export class SharedModule {}
