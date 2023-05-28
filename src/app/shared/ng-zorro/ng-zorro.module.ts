import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NzLayoutModule,
    NzMenuModule,
    NzCardModule,
    NzGridModule,
    NzInputModule,
    NzIconModule,
  ],
  exports: [
    NzLayoutModule,
    NzMenuModule,
    NzCardModule,
    NzGridModule,
    NzInputModule,
    NzIconModule,
  ],
})
export class NgZorroModule {}
