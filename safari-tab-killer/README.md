# TabsKiller

Introducing a Safari extension that automatically closes the oldest tabs when your browser gets cluttered with too many tabs. Say goodbye to a messy browser experience forever!

一个神奇的 Safari 扩展，当打开网页过多的时候，会自动关掉最老的网页，让浏览器保持清爽！

![xxqq20160114-1 2x](https://cloud.githubusercontent.com/assets/5022872/12328379/25a749c2-bb16-11e5-8400-6e5c67027a61.png)

=>

![qq20160114-2 2x](https://cloud.githubusercontent.com/assets/5022872/12328400/3906a1ca-bb16-11e5-853c-0da4ce65cd6a.png)


# Plugin

![qq20151003-2 2x](https://cloud.githubusercontent.com/assets/5022872/10262499/b39deb34-69fc-11e5-93b8-35bf10cedaaa.jpg)

# Features

1. Automatically close the oldest tabs when the number of tabs exceeds a set limit.
2. Customize the maximum number of tabs (x) according to your preference.
3. Lock specific URL patterns to ensure that tabs matching those patterns remain open, even when there are too many tabs open.

# 特性

1. 会自动关掉最老的网页，当打开的网页超过一定数量的时候。
2. 可以设置最大的标签数量。
3. 可以设置锁定规则，使得满足这个规则的网页不被关闭。

## Story

I usually open many tabs in Chrome. So I press Ctrl + W to close them a lot one time. Repeat and repeat. So I want to write an extension to solve my problem. Then I found “Tab Wrangler” extension which close tabs when x minutes not active. I learned from it. and make a extension to close the oldest tabs when more than x tabs. And lock some tabs whose url matches some pattern. It helps me a lot. I just do not need to take care of tabs any more. Tabs never become too many. It ease my life. Hope you like it so.

## Demo

![killer](https://cloud.githubusercontent.com/assets/5022872/10262518/cd196a60-69fd-11e5-93bf-0589d65eeb19.gif)

## Install

### Safari (macOS only, Xcode required)

This project has been converted to a Safari Web Extension. To build and install:

```
xcrun safari-web-extension-converter /path/to/safari-tabs-killer --macos-only --app-name "TabsKiller"
```

This generates an Xcode project. Open it in Xcode, select your development team, build and run. The extension will be available in Safari → Preferences → Extensions.

### Older Chrome version

The original Chrome extension is still available at https://chrome.google.com/webstore/detail/tabs-killer/hgmdeeoighmhomddlghfjcidkdcpbllf/
