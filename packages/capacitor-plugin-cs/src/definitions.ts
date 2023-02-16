export interface CAPContentsquarePluginPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
