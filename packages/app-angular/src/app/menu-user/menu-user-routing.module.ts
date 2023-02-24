
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuUserPage } from './menu-user.page';



const routes: Routes = [
  {
    path: '',
    component: MenuUserPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../home/home.module').then(
                (m) => m.HomePageModule
              ),
          },
        ],
      },
      {
        path: 'parametres',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../parametres/parametres.module').then(
                (m) => m.ParametresPageModule
              ),
          },

        ],
      },
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class MenuUserPageRoutingModule { }
