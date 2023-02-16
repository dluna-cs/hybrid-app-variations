export interface CAPContentSqaurePluginPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
