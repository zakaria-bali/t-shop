import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeShell } from './home.shell';

const routes: Routes = [
  {
    path: '',
    component: HomeShell,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
