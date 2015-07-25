/**
 * Created by lzw on 15/7/26.
 */

var tabUpdateTimes = {};
var minTabs = 10;

function updateTabTime(tabId) {
  tabUpdateTimes[tabId] = new Date().getTime();
}

function onTabCreated(tab) {
  console.log('tab created');
  updateTabTime(tab.id);
  checkToClose();
}

function onTabRemoved(tabId, removeInfo) {
  console.log('tab removed tabId: ' + tabId);
  console.dir(removeInfo);
  delete tabUpdateTimes[tabId];
}

function onTabUpdated(tabId, changeInfo, tab) {
  console.log('tab updated id : ' + tabId);
  console.dir(changeInfo);
  console.dir(tab);
  updateTabTime(tabId);
}

function onTabActivated(activeInfo) {
  console.log('onTabActivated');
  console.dir(activeInfo);
  updateTabTime(activeInfo.tabId);
}

function checkToClose() {
  chrome.windows.getCurrent({populate: true}, function (window) {
    if (window.tabs.length > minTabs) {
      var tabs = [];
      _.each(window.tabs, function (tab) {
        if (!tabUpdateTimes[tab.id]) {
          updateTabTime(tab.id);
        }
        tabs.push({tabId: tab.id, updatedAt: tabUpdateTimes[tab.id]});
      });
      tabs = _.sortBy(tabs, 'updatedAt');
      var size = window.tabs.length - minTabs;
      for (var i = 0; i < size; i++) {
        chrome.tabs.remove(tabs[i].tabId);
      }
    }
  });
}

chrome.tabs.onRemoved.addListener(onTabRemoved);
chrome.tabs.onCreated.addListener(onTabCreated);
chrome.tabs.onUpdated.addListener(onTabUpdated);
chrome.tabs.onActivated.addListener(onTabActivated);