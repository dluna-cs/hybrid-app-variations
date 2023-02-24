import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DynamicVarPage } from './dynamic-var.page';

const routes: Routes = [
  {
    path: '',
    component: DynamicVarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DynamicVarPageRoutingModule {}
