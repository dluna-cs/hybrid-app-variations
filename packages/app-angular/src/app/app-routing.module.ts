import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./menu-user/menu-user.module').then(m => m.MenuUserPageModule)
  },
  {
    path: 'basicfunctions',
    loadChildren: () => import('./basicfunctions/basicfunctions.module').then(m => m.BasicfunctionsPageModule)
  },
  {
    path: 'send-screen',
    loadChildren: () => import('./send-screen/send-screen.module').then(m => m.SendScreenPageModule)
  },
  {
    path: 'menu-user',
    loadChildren: () => import('./menu-user/menu-user.module').then(m => m.MenuUserPageModule)
  },
  {
    path: 'transaction',
    loadChildren: () => import('./transaction/transaction.module').then(m => m.TransactionPageModule)
  },
  {
    path: 'dynamic-var',
    loadChildren: () => import('./dynamic-var/dynamic-var.module').then(m => m.DynamicVarPageModule)
  },
  {
    path: 'snapshot',
    loadChildren: () => import('./snapshot/snapshot.module').then(m => m.SnapshotPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
