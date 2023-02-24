import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SendScreenPageRoutingModule } from './send-screen-routing.module';

import { SendScreenPage } from './send-screen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SendScreenPageRoutingModule
  ],
  declarations: [SendScreenPage]
})
export class SendScreenPageModule { }
