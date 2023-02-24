import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BasicfunctionsPageRoutingModule } from './basicfunctions-routing.module';

import { BasicfunctionsPage } from './basicfunctions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BasicfunctionsPageRoutingModule
  ],
  declarations: [BasicfunctionsPage]
})
export class BasicfunctionsPageModule { }
