import TyphonEvents  from 'backbone-esnext-events';

/**
 * Provides an auxiliary eventbus.
 */
const auxEventbus = new TyphonEvents("auxEventbus");

/**
 * Provides the main eventbus as the default export.
 */
const mainEventbus = new TyphonEvents("mainEventbus");

/**
 * Provides an eventbus potentially for use with a plugin system.
 */
const pluginEventbus = new TyphonEvents("pluginEventbus");

/**
 * Exports an instance of `TyphonEvents` which may be used as a main eventbus across modules facilitating separation
 * of concerns avoiding direct inter-module dependencies through message passing versus direct method invocation.
 */
export default mainEventbus;

export {auxEventbus};
export {pluginEventbus};