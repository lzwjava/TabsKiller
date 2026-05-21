/**
 * Created by lzw on 15/7/29.
 */
define(['underscore'], function (_) {

  Settings = {
    defaults: {
      maxTabs: 15,
      whiteList:['chrome://*']
    },
    init: function () {
      var self = this;
      var keys = [];
      _.mapObject(this.defaults, function (val, key) {
        self.cache[key] = self.defaults[key];
        keys.push(key);
        return val;
      });
      chrome.storage.sync.get(keys, function (items) {
        _.mapObject(items, function (val, key) {
          self.cache[key] = val;
          return val;
        });
      });
    },
    cache: {}
  };

  Settings.setMaxTabs = function (value) {
    if (isNaN(parseInt(value))) {
      throw Error('please input number');
    }
    value = parseInt(value);
    if (value <= 0 || value > 200) {
      throw Error('MaxTabs must be greater than 0 and less than 200');
    }
    Settings.setValue('maxTabs', value);
  };

  Settings.setWhiteList = function (value) {
    if (typeof value != 'object') {
      throw new Error('white list should be array, ' + typeof (value) + ' given');
    }
    Settings.setValue('whiteList', value);
  };

  Settings.get = function (key) {
    if (typeof this[key] == 'function') {
      return this[key]();
    }
    return this.cache[key];
  };

  Settings.set = function (key, value) {
    var setKey = key.substr(0, 1).toUpperCase() + key.substr(1);
    if (typeof this['set' + setKey] == 'function') {
      this['set' + setKey](value);
    } else {
      this.setValue(key, value);
    }
  };

  Settings.setValue = function (key, value, fx) {
    var items = {};
    this.cache[key] = value;
    items[key] = value;
    chrome.storage.sync.set(items, fx);
  };

  return Settings;

}, function (error) {
  console.dir(error.message);
  throw error;
});
