import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { MenuUserPageRoutingModule } from './menu-user-routing.module';
import { MenuUserPage } from './menu-user.page';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuUserPageRoutingModule
  ],
  declarations: [MenuUserPage]
})
export class MenuUserPageModule { }
