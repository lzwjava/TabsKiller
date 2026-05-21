/**
 * Created by lzw on 15/7/26.
 */

GlobalObject = {};

require(['tabmanager', 'settings'], function (tabmanager, settings) {
  var starup = function () {
    GlobalObject.settings = settings;
    GlobalObject.tabmanager = tabmanager;

    settings.init();
    tabmanager.init();

  };

  starup();
});
