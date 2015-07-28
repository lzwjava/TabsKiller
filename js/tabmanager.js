/**
 * Created by lzw on 15/7/29.
 */
define(['settings'], function (settings) {

  TabManager = {
    tabUpdateTimes: {}
  };

  TabManager.init = function () {
    chrome.tabs.onRemoved.addListener(TabManager.onTabRemoved);
    chrome.tabs.onCreated.addListener(TabManager.onTabCreated);
    chrome.tabs.onUpdated.addListener(TabManager.onTabUpdated);
    chrome.tabs.onActivated.addListener(TabManager.onTabActivated);
  };

  TabManager.updateTabTime = function (tabId) {
    TabManager.tabUpdateTimes[tabId] = new Date().getTime();
  };

  TabManager.onTabCreated = function (tab) {
    console.log('tab created ');
    TabManager.updateTabTime(tab.id);
    TabManager.checkToClose();
  };

  TabManager.onTabRemoved = function (tabId, removeInfo) {
    console.log('tab removed tabId: ' + tabId);
    console.dir(removeInfo);
    delete TabManager.tabUpdateTimes[tabId];
  };

  TabManager.onTabUpdated = function (tabId, changeInfo, tab) {
    console.log('tab updated id : ' + tabId);
    console.dir(changeInfo);
    console.dir(tab);
    TabManager.updateTabTime(tabId);
  };

  TabManager.onTabActivated = function (activeInfo) {
    console.log('onTabActivated');
    console.dir(activeInfo);
    TabManager.updateTabTime(activeInfo.tabId);
  };

  TabManager.checkToClose = function () {
    chrome.windows.getCurrent({populate: true}, function (window) {
      if (window.tabs.length > settings.get('maxTabs')) {
        var tabs = [];
        _.each(window.tabs, function (tab) {
          if (!TabManager.tabUpdateTimes[tab.id]) {
            TabManager.updateTabTime(tab.id);
          }
          tabs.push({tabId: tab.id, updatedAt: TabManager.tabUpdateTimes[tab.id]});
        });
        tabs = _.sortBy(tabs, 'updatedAt');
        var size = window.tabs.length - settings.get('maxTabs');
        for (var i = 0; i < size; i++) {
          chrome.tabs.remove(tabs[i].tabId);
        }
      }
    });
  };

  return TabManager;

}, function (error) {
  throw error;
});