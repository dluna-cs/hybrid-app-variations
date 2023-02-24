import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SnapshotPageRoutingModule } from './snapshot-routing.module';

import { SnapshotPage } from './snapshot.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SnapshotPageRoutingModule
  ],
  declarations: [SnapshotPage]
})
export class SnapshotPageModule {}
