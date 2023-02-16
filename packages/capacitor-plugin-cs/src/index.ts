import { registerPlugin } from '@capacitor/core';

import type { CAPContentsquarePluginPlugin } from './definitions';

const CAPContentsquarePlugin = registerPlugin<CAPContentsquarePluginPlugin>(
  'CAPContentsquarePlugin',
  {
    web: () => import('./web').then(m => new m.CAPContentsquarePluginWeb()),
  },
);

export * from './definitions';
export { CAPContentsquarePlugin };
