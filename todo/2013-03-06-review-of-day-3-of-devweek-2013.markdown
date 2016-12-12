---
author: gep13
comments: true
date: 2013-03-06 20:06:55+00:00
layout: post
slug: review-of-day-3-of-devweek-2013
title: Review of Day 3 of DevWeek 2013
wordpress_id: 1978
categories:
- Conferences
tags:
- Async
- Day 3
- DevWeek
- JavaScript
- K2
- Review
- SignalR
- Web API
---

# Today, I won a Surface at DevWeek...


What follow is a brief summary of the session that I attended at the 3rd overall day of DevWeek 2013 (the second day of actual sessions).  Review of the other days of DevWeek can be seen here



	
  * [Day 1 - Pre-Conference Workshop](http://gep13.me/W0AJEP)

	
  * [Day 2 - Conference Sessions](http://gep13.me/YuOPy2)

	
  * [Day 3 - Conference Sessions](http://gep13.me/ZqTHU1) (this post)

	
  * [Day 4 - Conference Sessions](http://gep13.me/13I4BKv)

	
  * [Day 5 - Post-Conference Workshop](http://gep13.me/Y0Gj7A)


So today was a great day!  Not only were there some top class presentations on Async ASP.NET, JavaScript, Web API and SignalR, but I was also lucky enough to win a Surface RT!  This was thanks to [K2](http://www.k2.com/platform/workflow) who were running a prize giveaway.  Huge thanks go to them, and although they didn't have the Surface to give me on the day, I am reassured that this will be delivered to me as soon as they have it available :-)


# First Morning Session


**Presenter: **Brock Allen (you can find his blog [here](http://brockallen.com/), and twitter [here](https://twitter.com/brocklallen))

**Topic: **Async ASP.NET


<blockquote>Asynchronous programming is all the rage these days and was a major theme in the most recent release of .NET. In this session we’ll look at what async means for web applications for both client and server code. We’ll see how ASP.NET has had async support for over 10 years and how WebForms and MVC provide an easy to use async programming model. We’ll then look at async client programming using JavaScript and jQuery, HTML5 WebWorkers and finally we’ll conclude with the ever popular SignalR library for supporting async communication.</blockquote>


**Thoughts**

I really enjoyed this presentation.  It was almost a near perfect _continuation_ (see what I did there?) to Andrew Clymer's talk that I went to yesterday.  This talk went into specifics about how things used to be done in ASP.NET and how you can start to make use of both Task, and async/await in ASP.NET.  There were loads of samples shown, and his slides were very detailed, which meant that it was really easy to follow along.  Great presentation!

**Takeaways**



	
  * ASP.NET has had async support since .Net 1.1

	
  * HttpTaskAsyncHandler base class is new in .Net 4.5

	
  * HttpContext is NOT thread safe, i.e contexts don't flow by default, so when doing continuations manually, you have to take care of ensuring the original context is passed into the callback.

	
  * jQuery doesn't work in WebWorkers, since it is dependent on the DOM.  There is however a stripped down version of jQuery available which you can use in WebWorkers

	
  * jQuery supports a "promise" i.e. the .then() syntax

	
  * Brock indicated that the source code for his presentation will be available on his blog in due course.




# Second Morning Session


**Presenter: **Hadi Hariri (you can find his blog [here](https://twitter.com/hhariri), and twitter [here](http://hadihariri.com/))

**Topic: **Just because it's JavaScript doesn't give you the right to write rubbish


<blockquote>JavaScript, the language that we all laughed at and our usage of it was limited to copy/paste of scripts to have some dynamic content in a web page, has all grown up. From jQuery on the client-side to Node.js on the server, everywhere you look there’s JavaScript. Unfortunately there’s also a ton of horrible, twisted and somewhat convoluted code that would make any developer that remotely cares about clean code suicidal.
A dynamic language that has somewhat given us a licence to do anything we want has been abused to the point that much of the blame has been placed on the language itself as opposed to the developers.
In this talk we’ll discuss some of the patterns and anti-patterns of JavaScript, things you should and shouldn’t do.</blockquote>


**Thoughts**

This was by far, the BEST presentation that I saw today!

Ok, so Hadi asked me to say that, but seriously, I felt that it was a very good talk.  Hadi raised a very interesting question in "how" JavaScript is being developed.  In many ways, it is still seen as the "baby brother", the "scripting language", the "User Interface Language", and as a result, it doesn't get treated with the same respect.  When you are doing other development, there are things like Unit Testing, Code Coverage, Continuous Delivery, etc.  Now, he wasn't saying that there aren't the equivalent systems for JavaScript, but rather, that they are not used with the same vigour.  If we, as developers, are going to start utilising JavaScript to the extent that we are likely to, we have to start giving it the respect it deserves.  This means actually "learning" it, rather than just copy and pasting from online sources.  A very well thought out and well executed presentation!

**Takeaways**



	
  * Common issue with writing code - as you write more, it becomes harder to maintain.  Writing with JavaScript takes you quickly down this route.

	
  * Historically, there hasn't been much tooling for JavaScript.  This has now changed, and it needs to start being used.

	
  * JSLint.com - online validation for JavaScript

	
  * Always use ===


**Quotes**

Due to Hadi's style of presentation, there are quite a few quotes here, many of which I believe were said in jest, so please don't take them out of context:



	
  * "Feel free to get up and leave"

	
  * "The aim of this talk is to show you how utterly crap JavaScript"

	
  * "As though JavaScript of the client isn't bad enough, now we have it on the server!"

	
  * "JavaScript is a 'write-once' language" - i.e. you never want to look at the code again

	
  * "Hopefully I will convert you, and you will all hate JavaScript"


**Book Recommendations**



	
  * [JavaScript Patterns](http://www.amazon.co.uk/JavaScript-Patterns-Stoyan-Stefanov/dp/0596806752/ref=sr_1_1?ie=UTF8&qid=1362598412&sr=8-1)

	
  * [JavaScript: The Good Parts](http://www.amazon.co.uk/JavaScript-Good-Parts-Douglas-Crockford/dp/0596517742/ref=sr_1_1?ie=UTF8&qid=1362598427&sr=8-1)




# First Afternoon Session


**Presenter: **Dominick Baier (you can find his blog [here](http://leastprivilege.com/), and twitter [here](https://twitter.com/leastprivilege))

**Topic: **Patterns and techniques for securing REST/HTTP-based services and (ASP.NET) Web APIs


<blockquote>The industry is moving to an HTTP/Web API based approach when it comes to modelling web services. These services are typically much more lightweight compared to their SOAP counterparts, which makes them easier to use in cross-platform and device architectures. But are they maybe too lightweight? Can they fulfil the security requirements? It turns out they can! In this talk we will have a look at how authentication and authorization can be implemented in HTTP-based services in general, and we’ll have a look at the security features of Microsoft’s new framework called ASP.NET Web API in particular. In addition we’ll shed light on what terms like OAuth2, JWT, OpenID and WS-Federation actually mean, and where these technologies make sense.</blockquote>


**Thoughts**

With all the buzz around Web API, it was interesting to hear in this session what needs to be done "behind the scenes" to ensure that things are secure.  There are several gotchas, such as lack of built-in support for cross domain applications in Web API.  The infrastructure is there to do it yourself, but it is a lot of work, and you have to know what you are doing.  Thankfullly, Dominick, and his mates at [thinktecture](http://thinktecture.com/) have created the IdentityModel and IdentityServer (which can be found [here](https://github.com/thinktecture)) which attempts to fill this void.  These projects are open source, and released under an MIT license, meaning that you can do whatever you want with them.  A very good presentation, although, I did feel that in parts, it was a little rushed.  Also, no fault of Dominick's, but the room was a little warm, which I think was a contributing factor to the guy in front of me sleeping through out the entire talk.  I think several people were put off by this, as the gentleman in question was snoring quite loudly, but no-one had the heart to wake him.

**Takeaways**



	
  * All Web API Security is built on top of SSL

	
  * Authorize Attribute on ApiController specifies what Authentication is required

	
  * New AllowAnonymous Attribute to specify that no Authentication is required

	
  * You can create your own Authorization Filter

	
  * No built-in support for Cross Domain applications

	
  * [Useful site](http://openidtest.uninett.no/jwt) for decoding tokens

	
  * Token-based Authentication is "THE" way to do it

	
  * When generating tokens, keep the token lifetime short


**Quotes**



	
  * "IF you are ignoring SSL Certificate Errors, you are not doing security properly"

	
  * "For some reason it is in German... That means it is extra secure!" - when talking about a login prompt that appeared in German text




# Second Afternoon Session


**Presenter: **Christian Weyer (you can find his blog [here](http://weblogs.thinktecture.com/cweyer/), and twitter [here](https://twitter.com/christianweyer))

**Topic: **I wanna be cool! Push communication with SignalR for the web & beyond


<blockquote>Google, Facebook & Co. are leading the way: users want to see data and updates, live & now. There is need for a server or service to send messages and data into clients – without the client actually explicitly asking. Christian Weyer shows how .NET developers can implement this with SignalR – a framework with a simple yet powerful programming model. You should not have to care about the underlying protocols and (quasi-) standards in order to realize bi-directional communication over standard network infrastructure with potentially any device (desktop, browser, mobile) – not just for the web.</blockquote>


**Thoughts**

For me, Christian's session at last years DevWeek was a stand out one!  He is an amazing presenter, and clearly loves what he does.  This session was no exception!  We were taking on a whistle-stop tour of SignalR, including loads of real world examples, that really help to drive home how SignalR could be used in practice.  If you have never been to one of Christian's presentation, you owe it to yourself to go along to one!

Great job!

**Takeaways**



	
  * Wow, just wow!  He showed how, using SignalR, you can surface changes that were made directly to the database (using SQL Server Management Studio) could be surfaced to a DataGrid running in the browser.

	
  * [CEFSharp](https://github.com/chillitom/CefSharp) - an embeddable version of Chrome that you can run in your .Net Applications

	
  * Suggestion that you don't create native applications, in the traditional sense, but rather create native apps that host a browser, and run your application there.

	
  * SignalR Sample Applications - Mouse Tracking - truly mind-blowing what is being done in only a few lines of code!

	
  * Regardless of browser, long polling will always work and will be used as fall back connection with SignalR


**Quotes**



	
  * "If your software doesn't contain a DataGrid, you have failed!"

	
  * "Dynamic! Ah, can you feel this?" - you had to be there to appreciate this one!




# Overall Thoughts


Another great day of sessions, made all the better by winning a Surface RT!  Looking forward to more sessions tomorrow!
