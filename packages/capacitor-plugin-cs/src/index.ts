import { registerPlugin } from '@capacitor/core';

import type { CAPContentsquarePlugin } from './definitions';

const CAPContentsquare = registerPlugin<CAPContentsquarePlugin>(
  'CAPContentsquare',
  {
    web: () => import('./web').then(m => new m.CAPContentsquareWeb()),
  },
);

const ContentsquarePlugin = {
  sendCommand: function (name: string, payload: Record<string, any>): void {
    console.log('sendCommand proxy');
    CAPContentsquare.sendCommand({ name, payload });
  }
};



export * from './definitions';
export { CAPContentsquare, ContentsquarePlugin };
