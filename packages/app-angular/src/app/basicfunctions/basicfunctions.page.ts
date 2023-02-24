import { Component, OnInit } from '@angular/core';
import { ContentsquareService } from '../services/contentsquare.service';

@Component({
  selector: 'app-basicfunctions',
  templateUrl: './basicfunctions.page.html',
  styleUrls: ['./basicfunctions.page.scss'],
})
export class BasicfunctionsPage {

  constructor(private contentsquareService: ContentsquareService) { }

  optIn() {
    this.contentsquareService.sendCommand('optIn', {})
    .then((res) => {
      console.log('Opt in result', res);
    });
  }

  optOut() {
    this.contentsquareService.sendCommand('optIn', {})
    .then((res) => {
      console.log('Opt out result', res);
    });
  }
}
