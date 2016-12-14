---
author: gep13
comments: true
date: 2011-02-05 21:29:37+00:00
layout: post
slug: streaming-movies-from-synology-server-to-ps3
title: Streaming movies from Synology Server to PS3
wordpress_id: 51
tags:
- Blu-Ray
- DVD
- PS3
- Synology Server
---

_NOTE: I am not advocating the illegal ripping of DVDs.  Every DVD that I rip onto my server I own, and I am simply using this approach to make the watching of DVDs easier across the various TVs and computers that I have in my house._

Since getting my [Synology Server](http://www.synology.com/us/products/ds410/index.php) (which I LOVE, by the way), I have been wondering about how I can “rip” DVDs onto this server, which I could then watch downstairs on my PS3.  I did some searching, and everything I found seemed overly complicated, and the ones that I tried ended up not working correctly.

However, after talking to a few colleagues, and some additional searching, I found the following two packages:

**MakeMKV:** [http://www.makemkv.com/](http://www.makemkv.com/)

**PS3Muxer:** [http://forum.doom9.org/showthread.php?t=148627](http://forum.doom9.org/showthread.php?t=148627)

The first package does the job of “ripping” the actual audio and video content from the DVD/Blu-Ray onto your computer, and placing it into a MKV container.  I was sort of hoping that this one action was going to be enough to stream the content to the PS3, however, the MKV format is not supported on the PS3.

As a result, a second step is required, and this is where PS3Muxer steps in.  It takes the MKV container (.mkv), and translates it into a .m2ts file, which is possible to stream to the PS3.

Personally, I would prefer that this was a one step action, rather than two, but for now, I am happy to do this “extra” step.

If anyone has got any thoughts on a better approach to the above, then I would be very interested to hear about it.
