import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InAppBrowserPage } from './in-app-browser.page';

const routes: Routes = [
  {
    path: '',
    component: InAppBrowserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InAppBrowserPageRoutingModule {}
