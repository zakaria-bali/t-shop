import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzCardModule } from 'ng-zorro-antd/card';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NzLayoutModule,
    NzMenuModule,
    NzCardModule
  ],
  exports: [
    NzLayoutModule,
    NzMenuModule,
    NzCardModule
  ]
})
export class NgZorroModule { }
