---
author: gep13
comments: true
date: 2013-11-07 21:16:50+00:00
layout: post
slug: bsod-windows-8.1-using-internet-connection-sharing-windows-phone-8
title: BSOD on Windows 8.1 when using Internet Connection Sharing on Windows Phone
  8
wordpress_id: 2180
categories:
- Windows Phone 8
tags:
- BSOD
- Internet Connection Sharing
- Windows 8.1
- Windows Phone 8
---

# But there is a fix...

Following the update of my laptop to Windows 8.1, every time I would tether to my Windows Phone 8 using Internet Connection Sharing, I would get a Blue Screen Of Death (BSOD).

<!--more-->

![BSOD when using ICS 1](/assets/posts/2013-11-07-bsod-windows-81-using-internet-connection-sharing-windows-phone-8/WP_20131025_07_11_25_Pro-1024x576.jpg)

![BSOD when using ICS 2](/assets/posts/2013-11-07-bsod-windows-81-using-internet-connection-sharing-windows-phone-8/WP_20131025_06_56_38_Pro-1024x576.jpg)

This wouldn't happen if I was connected to a standard wireless connection, it was only when I was using the wireless hot spot which is made available through Internet Connection Sharing on my Windows Phone 8.  After a bit of googling, I turned up this post:

[http://gadgets.itwriting.com/1986-fixing-blue-screen-using-internet-connection-sharing-in-windows-phone-8.html#comment-35511](http://gadgets.itwriting.com/1986-fixing-blue-screen-using-internet-connection-sharing-in-windows-phone-8.html#comment-35511)

Which seemed to explain exactly what I needed to do, however, for the life of me, I couldn't find the dialogue box in Windows 8.1 that would give me access to the FIPS setting to fix the issue.  I asked the author of the blog post if he could help, and happily he was able to, check the comments of the blog post from that information on that.

However, while I was waiting for his reply, I reached out to my friendly neighborhood IT expert, namely [Mark Le Huray](https://twitter.com/MarkLeHuray), who was able to point me in the direction of a command line way of setting the required parameter:

[![Twitter Help from Mark Le Huray](/assets/posts/2013-11-07-bsod-windows-81-using-internet-connection-sharing-windows-phone-8/Twitter_Help.png)](https://twitter.com/MarkLeHuray/status/393664176012267520)

Here "ur wireless name" is actually the name of the wireless endpoint, i.e. the SSID for the connection.  This is what is displayed in the Internet Sharing page on your windows phone.

Opening the command prompt, and executing this command was all the is required to get rid of the BSOD:

![Fixing BSOD by setting FIPS](/assets/posts/2013-11-07-bsod-windows-81-using-internet-connection-sharing-windows-phone-8/2013-11-05_0741.png)

Big thanks to Mark for all his help in getting this sorted, and also Tim who pointed me in the right direction!
