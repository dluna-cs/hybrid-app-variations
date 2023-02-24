import { Component, OnInit } from '@angular/core';
declare var cordova: any;
@Component({
  selector: 'app-in-app-browser',
  templateUrl: './in-app-browser.page.html',
  styleUrls: ['./in-app-browser.page.scss'],
})
export class InAppBrowserPage implements OnInit {
  mybrowser: any;

  // Plugin is implemented via iframe
  constructor() { }

  ngOnInit() {
  }

  openGoogleIab() {
    // Opens the inapp Browser
    this.mybrowser = cordova.InAppBrowser.open('https://google.com', '_blank');
  }

  openGoogleSelf() {
    // Opens in the Cordova WebView if the URL is in the white list, otherwise it opens in the InAppBrowser.
    this.mybrowser = cordova.InAppBrowser.open('https://google.com', '_self');
  }
  openCsIab() {
    this.mybrowser = cordova.InAppBrowser.open('https://tupeuxpastest.csq.io/mobile/web-view-cart.html', '_blank');
  }
  openCsSelf() {
    this.mybrowser = cordova.InAppBrowser.open('https://tupeuxpastest.csq.io/mobile/web-view-cart.html', '_self');
  }

}
