import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { NzDividerModule } from 'ng-zorro-antd/divider';

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
    NzInputNumberModule,
    NzAvatarModule,
    NzRateModule,
    NzDividerModule,
  ],
  exports: [
    NzLayoutModule,
    NzMenuModule,
    NzCardModule,
    NzGridModule,
    NzInputModule,
    NzIconModule,
    NzInputNumberModule,
    NzAvatarModule,
    NzRateModule,
    NzDividerModule,
  ],
})
export class NgZorroModule {}
