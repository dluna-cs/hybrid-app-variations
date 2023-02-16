import { WebPlugin } from '@capacitor/core';

import type { CAPContentsquarePluginPlugin } from './definitions';

export class CAPContentsquarePluginWeb
  extends WebPlugin
  implements CAPContentsquarePluginPlugin
{
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
