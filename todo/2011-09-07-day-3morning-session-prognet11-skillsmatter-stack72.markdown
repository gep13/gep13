---
author: gep13
comments: true
date: 2011-09-07 12:48:46+00:00
layout: post
slug: day-3morning-session-prognet11-skillsmatter-stack72
title: 'Day 3–Morning Session #prognet11 @skillsmatter @jonskeet'
wordpress_id: 365
categories:
- Conferences
tags:
- Async
- C#5
- prognet
- SkillsMatter
---

First up on this last day of the Progressive .Net Tutorials was Jon Skeet ([@jonskeet](http://twitter.com/#!/jonskeet)) and his “[Async Methods in C# 5](http://skillsmatter.com/podcast/ajax-ria/async-methods-in-c-sharp-5-2389)” talk.

Like Paul Stacks talk yesterday, this was a very well attended talk, and rightly so.  I had never seen a Jon Skeet presentation before but I have heard him on various pod casts and videos, but he is a great presenter who has a natural talent at explaining complicated scenarios in a easy to understand way.

Jon started out with some very impressive slides (a example of which can be seen [here](http://msmvps.com/blogs/jon_skeet/archive/2011/05/08/eduasync-part-1-introduction.aspx)) and explained the “asynchronous” techniques that have been used to date in earlier versions of the framework:



	
  * BeginFoo

	
    * Callback

	
      * EndFoo









	
  * OnSuccess

	
  * OnError


	
    * Go!



And then began explaining what awaits (do you like my pun? ![Smile](http://www.gep13.co.uk/blog/wp-content/uploads/184b90d28369_BB7D/wlEmoticon-smile.png)) us in C# 5.

I have to say that the usage of the async and await keywords is very appealing, and it is reasonably easy to see how it could be applied in a code base.

Following this, Jon then went onto discuss his Eduasync sample code which, rather than using the Microsoft Visual Studio Async CTP, re-writes the implementation.  Although it was interesting to see how all the pieces fit together, Jon did make clear that it is unlikely that you would ever need to write any code like this, but rather it was just “fun” to do.

At the end of the talk I can honestly say that my head hurts!  I went into this talk having never played with the Parallel Extension in .Net 4.0 and having read hardly anything C# 5 Async, and although I got “some” of the concepts, I would still have a lot to learn.  This is really something that I would need to place with in anger in order to concrete my understandings.  The first port of call will be to go back and read Jon’s series to blog posts [here](http://msmvps.com/blogs/jon_skeet/archive/tags/Eduasync/default.aspx).

**Quotes:**

“I’m just an enthusiastic amateur C# Developer” – Jon Skeet

“goto’s are considered awesome” – Jon Skeet

**Break out discussions:**

[http://mikehadlow.blogspot.com/2011/01/monads-in-c1-introduction.html](http://mikehadlow.blogspot.com/2011/01/monads-in-c1-introduction.html)

[http://vimeo.com/21705972](http://vimeo.com/21705972)

**Code used during the talk:**

[http://www.yoda.arachsys.com/democode.zip](http://www.yoda.arachsys.com/democode.zip)

[http://code.google.com/p/eduasync/](http://code.google.com/p/eduasync/)
