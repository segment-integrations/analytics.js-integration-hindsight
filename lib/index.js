'use strict';

var integration = require('@segment/analytics.js-integration');
var useHttps = require('use-https');

var prepareProps = function(props) {
  return Object.keys(props)
    .reduce(function(obj,key) {
      var value = props[key];
      obj[key] = typeof value === 'object' ? JSON.stringify(value) : props[key];
      return obj;
    },{});
};

/**
 * Expose `Hindsight`
 *
 */

var Hindsight = module.exports = integration('Hindsight')
  .global('RB')
  .option('pixel_code','')
  .tag('http', '<script src="http://getrockerbox.com/assets/xyz.js">')
  .tag('https', '<script src="https://getrockerbox.com/assets/xyz.js">');

/**
 * Initialize
 */

Hindsight.prototype.initialize = function() {
  window.RB = {};
  window.RB.disablePushState = true;
  window.RB.queue = [];
  window.RB.track = window.RB.track || function() {
    window.RB.queue.push(Array.prototype.slice.call(arguments));
  };
  window.RB.source = this.options.pixel_code;

  var protocol = useHttps() ? 'https' : 'http';

  this.load(protocol, this.ready);
};

/**
 * Loaded
 */

Hindsight.prototype.loaded = function() {
  return !!window.RB && window.RB.loaded;
};

/**
 * Page
 */

Hindsight.prototype.page = function(track) {
  window.RB.track('view', prepareProps(track.properties() || {}));
};

/**
 * Track
 */

Hindsight.prototype.track = function(track) {
  window.RB.track(track.event(), prepareProps(track.properties() || {}));
};

