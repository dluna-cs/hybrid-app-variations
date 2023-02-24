import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActionButtonPageRoutingModule } from './action-button-routing.module';

import { ActionButtonPage } from './action-button.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActionButtonPageRoutingModule
  ],
  declarations: [ActionButtonPage]
})
export class ActionButtonPageModule {}
