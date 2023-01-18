// Type definitions for cordova-plugin-assets

/**
 * This plugin defines a global assets object with methos to interact with them
 */
interface Assets {
    /* get list of all assets */
    list(): Promise<string[]>;
}

declare var assets: Assets;
