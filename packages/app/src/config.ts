// eslint-disable-next-line
declare var __SUBPLATFORM__: "electron" | "browser-ext" | undefined;

export const isDev = __DEV__;

// Tells on what variant of the platform we're running
export let subplatform: typeof __SUBPLATFORM__ = undefined;

// Injected in electron and browser-extension builds.
if (typeof __SUBPLATFORM__ === "string") {
    subplatform = __SUBPLATFORM__
}
