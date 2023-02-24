import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage implements OnInit {

  constructor(private actionSheetController: ActionSheetController) { }

  ngOnInit() {
  }

  async open () {
    const mode = "ios";

    const actionSheet = await this.actionSheetController.create({
      header: 'Albums',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: mode !== 'ios' ? 'trash-outline' : void 0,
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Share',
        icon: mode !== 'ios' ? 'share-outline' : void 0,
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Play (open modal)',
        icon: mode !== 'ios' ? 'play-circle-outline' : void 0,
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'Favorite',
        icon: mode !== 'ios' ? 'heart-outline' : void 0,
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Cancel',
        icon: mode !== 'ios' ? 'close' : void 0,
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

}
