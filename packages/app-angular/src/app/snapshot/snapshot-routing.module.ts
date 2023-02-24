import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SnapshotPage } from './snapshot.page';

const routes: Routes = [
  {
    path: '',
    component: SnapshotPage
  },
  {
    path: 'ionic-ui',
    loadChildren: () => import('./ionic-ui/ionic-ui.module').then( m => m.IonicUiPageModule)
  },
  {
    path: 'in-app-browser',
    loadChildren: () => import('./in-app-browser/in-app-browser.module').then( m => m.InAppBrowserPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SnapshotPageRoutingModule {}
