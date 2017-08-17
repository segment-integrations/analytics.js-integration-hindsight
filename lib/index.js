'use strict';

/**
 * Module dependencies.
 */

var integration = require('@segment/analytics.js-integration');

/**
 * Expose `Hindsight` integration.
 */

var Hindsight = module.exports = integration('Hindsight')
  .option('apiKey', '')
  .tag('<script src="">');

/**
 * Initialize.
 *
 * @api public
 */

Hindsight.prototype.initialize = function() {
  // put your initialization logic here

  this.load(this.ready);
};

/**
 * Loaded?
 *
 * @api public
 * @return {boolean}
 */

Hindsight.prototype.loaded = function() {
  // what are required properties or functions that you need available on the `window`
  // before the integration marks itself as ready?
  return true;
};

/**
 * Page
 *
 * @api public
 */

Hindsight.prototype.page = function(page) {
  // send pageview data
};

/**
 * Identify
 *
 * @api public
 */

Hindsight.prototype.identify = function(identify) {
  // send user data
};

/**
 * Track
 *
 * @api public
 */

Hindsight.prototype.track = function(track) {
  // send event data
};
