import { WebPlugin } from '@capacitor/core';

import type { CAPContentSqaurePluginPlugin } from './definitions';

export class CAPContentSqaurePluginWeb
  extends WebPlugin
  implements CAPContentSqaurePluginPlugin
{
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
