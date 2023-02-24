import { Injectable } from '@angular/core';

declare var ContentsquarePlugin: {
  sendCommand(name: string, payload: any): Promise<{ code: number, message: string }>;
};

@Injectable({
  providedIn: 'root'
})
export class ContentsquareService {

  // We map the url of the screen with the screen name
  private mapScreenURL: Record<string, string> = {
    "/home": "Menu",
    "/basicfunctions": "Privacy",
    "/send-screen": "Send Screen",
    "/transaction": "Transaction",
    "/dynamic-var": "Dynamic Var",
    "/parametres": "Parametres",
    "/snapshot": "Snapshot"
  };

  // Some URLs could be excluded.
  private excludedURL: string[] = [];

  constructor() { }

  // Send the screen name to the SDK
  sendScreenName(url: string) {
    if (!this.excludedURL.includes(url)) {
      const name = this.getScreenName(url);
      console.log('Url: ' + url + ' -> Send screen name: ' + name);
      ContentsquarePlugin.sendCommand('sendScreenName', { name });
    } else {
      console.log('Url: ' + url + ' -> Excluded URL ');
    }
  }

  sendCommand(name: string, payload: any): Promise<{ code: number, message: string }> {
    return ContentsquarePlugin.sendCommand(name, payload);
  }

  private getScreenName(url: string) {
    if (url.startsWith('/snapshot')) {
      let screenName = url.substring(url.lastIndexOf('/') + 1)
      //Capitalize the first letter
      screenName = screenName.charAt(0).toUpperCase() + screenName.slice(1);
      const fullScreenName = 'Ionic ' + screenName;
      return (fullScreenName);
    } else {
      return this.mapScreenURL[url] || "undefined";
    }
  }
}
