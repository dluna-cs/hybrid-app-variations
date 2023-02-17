export interface PluginResult {
  code: number;
  message: string;
}

export interface SdkCommand {
  name: string;
  payload: Record<string, any>;
}

export interface CAPContentsquarePlugin {
  sendCommand(options: SdkCommand): Promise<PluginResult>;
}
