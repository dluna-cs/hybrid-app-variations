import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverExampleComponent } from '../components/popover-example/popover-example.component';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

  constructor(public popoverController: PopoverController) { }

  ngOnInit() {
  }

  showPopover = async (event: MouseEvent) => {
    const popover = await this.popoverController.create({
      component: PopoverExampleComponent,
      dismissOnSelect: true,
      event,
      translucent: true
    });
    return popover.present();
  }

}
