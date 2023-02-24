import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DynamicVarPageRoutingModule } from './dynamic-var-routing.module';

import { DynamicVarPage } from './dynamic-var.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DynamicVarPageRoutingModule
  ],
  declarations: [DynamicVarPage]
})
export class DynamicVarPageModule {}
