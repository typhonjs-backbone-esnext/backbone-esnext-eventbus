import TyphonEvents  from 'backbone-esnext-events';

/**
 * Exports an instance of `TyphonEvents` which adds asynchronous capabilities to `Backbone.Events` which may be used as
 * a main eventbus across modules facilitating separation of concerns avoiding direct inter-module dependencies through
 * message passing versus direct method invocation.
 */
export default new TyphonEvents("mainEventbus");
