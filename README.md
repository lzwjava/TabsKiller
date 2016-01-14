# TabsKiller

A Chrome plugin that automatically kill the oldest tabs when tabs are too many, goodbye messy browser forever!

一个神奇的 Chrome 插件，当打开网页过多的时候，会自动关掉最老的网页，让浏览器保持清爽！

![qq20151003-2 2x](https://cloud.githubusercontent.com/assets/5022872/10262499/b39deb34-69fc-11e5-93b8-35bf10cedaaa.jpg)

# Features

1. Automatically close oldest tabs when number of tabs is more than x.
2. Can customize the x (tabs maximum)
3. Can lock some pattern url, so tabs matched the pattern will not be closed even when there are too much tabs.

# 特性

1. 会自动关掉最老的网页，当打开的网页超过一定数量的时候。
2. 可以设置最大的标签数量。
3. 可以设置锁定规则，使得满足这个规则的网页不被关闭。

## Story

I usually open many tabs in Chrome. So I press Ctrl + W to close them a lot one time. Repeat and repeat. So I want to write an extension to solve my problem. Then I found “Tab Wrangler” extension which close tabs when x minutes not active. I learned from it. and make a extension to close the oldest tabs when more than x tabs. And lock some tabs whose url matches some pattern. It helps me a lot. I just do not need to take care of tabs any more. Tabs never become too many. It ease my life. Hope you like it so.

## Demo

![killer](https://cloud.githubusercontent.com/assets/5022872/10262518/cd196a60-69fd-11e5-93bf-0589d65eeb19.gif)

## Install

Please go chrome store https://chrome.google.com/webstore/detail/tabs-killer/hgmdeeoighmhomddlghfjcidkdcpbllf/ ,
or install manually:

First, go to `chrome://extensions`, then select the developer mode, and then load unpacked extension. It's done.

![chrome](https://cloud.githubusercontent.com/assets/5022872/10262586/ddc451b0-6a00-11e5-8b10-da16c9658221.jpg)


More detail can find in Chrome Get Started [tutorial](https://developer.chrome.com/extensions/getstarted#unpacked).

中文：

请前往 Chrome 商店 https://chrome.google.com/webstore/detail/tabs-killer/hgmdeeoighmhomddlghfjcidkdcpbllf/ ，或手动安装：

点击右边的 Download ZIP 下载源代码及解压，然后打开 `chrome://extensions`(复制粘贴到浏览器地址栏并打开)，选择`开发者模式`，然后点击`加载已解压的扩展程序`，像上面的图一样。接下来会弹出一个文件选择框，选择刚刚下载的源代码目录。这样就安装了这个插件了。
