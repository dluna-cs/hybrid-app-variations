import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonicUiPageRoutingModule } from './ionic-ui-routing.module';

import { IonicUiPage } from './ionic-ui.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicUiPageRoutingModule
  ],
  declarations: [IonicUiPage]
})
export class IonicUiPageModule {}
