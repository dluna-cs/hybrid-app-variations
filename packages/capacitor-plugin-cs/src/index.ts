import { registerPlugin } from '@capacitor/core';

import type { CAPContentSqaurePluginPlugin } from './definitions';

const CAPContentSqaurePlugin = registerPlugin<CAPContentSqaurePluginPlugin>(
  'CAPContentSqaurePlugin',
  {
    web: () => import('./web').then(m => new m.CAPContentSqaurePluginWeb()),
  },
);

export * from './definitions';
export { CAPContentSqaurePlugin };
