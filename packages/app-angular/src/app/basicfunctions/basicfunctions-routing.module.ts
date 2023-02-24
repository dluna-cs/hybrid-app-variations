import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BasicfunctionsPage } from './basicfunctions.page';

const routes: Routes = [
  {
    path: '',
    component: BasicfunctionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BasicfunctionsPageRoutingModule { }
