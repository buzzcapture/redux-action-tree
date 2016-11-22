var _ = require("lodash");

/**
 * Middleware for signals.
 * @param context
 * @returns {Function}
 */
function signalsMiddleware (context) {
  return function middleware (next) {
    return function trigger (action) {
      return _.isFunction(action) ? action(context.dispatch, context.getState) : next(action);
    };
  };
}

module.exports = signalsMiddleware;