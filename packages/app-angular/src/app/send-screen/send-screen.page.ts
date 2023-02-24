import { Component, OnInit } from '@angular/core';
import { ContentsquareService } from '../services/contentsquare.service';

@Component({
  selector: 'app-send-screen',
  templateUrl: './send-screen.page.html',
  styleUrls: ['./send-screen.page.scss'],
})
export class SendScreenPage {
  public screenName = '';

  constructor(private contentsquareService: ContentsquareService) { }

  
  sendScreenName() {
    this.contentsquareService.sendCommand('sendScreenName', { nme: this.screenName })
    .then(() => {
      this.screenName = '';
    })
  }
}
