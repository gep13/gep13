---
Title: Now using Feedburner for blog site
Published: 14/1/2012
Tags:
- FeedBurner
- RSS
- Syndication
---

I have decided to start using [FeedBurner](http://feedburner.google.com/) for managing the Feeds for my blog (If you are not familiar with what FeedBurner is, you can find some more information [here](http://en.wikipedia.org/wiki/FeedBurner)). Basically, it will allow me, on top of the Google Analytics that I already have running, to monitor how many people (if any) are actually looking at my blog.

The installation and setup of FeedBurner actually turned out to be quite simple. The one thing that I was worried about was previously subscribed RSS readers not working after the switch. However, with the help of the [FeedBurner FeedSmith Extend](http://wordpress.org/extend/plugins/feedburner-setting/) plugin for WordPress, this is all taken care of (and it is actually recommended by FeedBurner during the setup phase. With that in place, and the feeds configured in my FeedBurner account, it all seemed to be working. On top of this, I then chose to create a custom CNAME entry in my domains DNS Records so that I could use:

 
> feeds.gep13.co.uk

rather than:

> feeds.feedburner.com

This is very small change, but it helps to keep everything “tidy”, and again, it was very simple to setup and configure.

If you actually subscribe to my blog, there should be nothing for you to do, everything should continue to work as it did before. The redirect to the FeedBurner proxy happens with the help of the WordPress plugin I am using. If you have any problems, and for some reason the RSS Feed is no longer working, then I would be interested to hear from you so that I can figure out what is going on. Thanks!
