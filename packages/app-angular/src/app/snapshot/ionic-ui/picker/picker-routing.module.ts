import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PickerPage } from './picker.page';

const routes: Routes = [
  {
    path: '',
    component: PickerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PickerPageRoutingModule {}
