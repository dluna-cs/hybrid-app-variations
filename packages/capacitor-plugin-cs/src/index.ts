import { registerPlugin } from '@capacitor/core';

import type { CAPContentsquarePlugin } from './definitions';

const CAPContentsquare = registerPlugin<CAPContentsquarePlugin>(
  'CAPContentsquare',
  {
    web: () => import('./web').then(m => new m.CAPContentsquareWeb()),
  },
);

export * from './definitions';
export { CAPContentsquare };
