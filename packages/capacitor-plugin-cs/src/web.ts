import { WebPlugin } from '@capacitor/core';

import type { CAPContentsquarePlugin } from './definitions';

export class CAPContentsquareWeb
  extends WebPlugin
  implements CAPContentsquarePlugin
{
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
