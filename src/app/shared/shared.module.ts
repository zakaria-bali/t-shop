import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroModule } from './ng-zorro/ng-zorro.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [ToolbarComponent, FooterComponent],
  imports: [CommonModule, NgZorroModule],
  exports: [CommonModule, NgZorroModule, ToolbarComponent, FooterComponent],
})
export class SharedModule {}
