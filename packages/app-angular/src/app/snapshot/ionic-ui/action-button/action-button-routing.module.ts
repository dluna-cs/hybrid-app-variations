import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActionButtonPage } from './action-button.page';

const routes: Routes = [
  {
    path: '',
    component: ActionButtonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActionButtonPageRoutingModule {}
