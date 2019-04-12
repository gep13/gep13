---
Title: Review of Day 2 of DevWeek 2013
Published: 5/3/2013
Tags:
- async
- await
- css3
- day 2
- devweek
- html 5
- keynote
- knockout.js
- london
- review
RedirectFrom: blog/review-of-day-2-of-devweek-2013/index.html
---

# A busy second day at DevWeek...

What follows is a brief summary of the sessions that I attended at the 2nd overall day of DevWeek 2013 (the first day of actual sessions).  Review of the other days of DevWeek can be seen here:

- [Day 1 - Pre-Conference Workshop](http://gep13.me/W0AJEP)
- [Day 2 - Conference Sessions](http://gep13.me/YuOPy2) (this post)
- [Day 3 - Conference Sessions](http://gep13.me/ZqTHU1)
- [Day 4 - Conference Session](http://gep13.me/13I4BKv)
- [Day 5 - Post-Conference Workshop](http://gep13.me/Y0Gj7A)

In this the 16th year of DevWeek, Dave Wheeler was meant to be doing the Keynote presentation, however, due to suffering a back injury, Kevlin Henney and Steve Plank, stepped in to do two sessions for the Keynote.

# First Morning Session

**Presenter:** [Kevlin Henney](https://twitter.com/kevlinhenney) and [Steve Plank](https://twitter.com/plankytronixx)

**Topic:** "A Question of Craftsmanship" and "Advances in Cloud Computing Platform"

**Thoughts**

Personally, I thought that these were two very good sessions.  Kevlin's gave a very thought-provoking discussion about thinking about code as art, and how we should be ensuring that we strive to create the best code possible.  And Steve gave a great demo of how complicated systems can be configured and deployed in Windows Azure.  I also really liked Steve's slides, which really have to be seen to be understood.  They were essentially drawings, which were created as he was speaking.

While leaving the room, I heard some mumblings from some other delegates that the second talk was a sales pitch, but I really don't think that this was how it was intended.  I guess you can't please everyone!

**Takeaways**

- Is code art?
- Well it can be - [Qlobe from Yusuke Endoh](http://mamememo.blogspot.co.uk/2010/09/qlobe.html)
- [Tag Cloud generator for code](http://sourcecodecloud.codeplex.com/)
- [VM Depot for Windows Azure](http://vmdepot.msopentech.com/List/Index)
- [Free Azure Training Kit](http://www.microsoft.com/en-us/download/details.aspx?displaylang=en&id=8396)
- [Upcoming Azure Training Camps](http://blogs.msdn.com/b/plankytronixx/archive/2013/01/22/uk-windows-azure-dev-camps.aspx)

**Quotes**

- "You reach for the banana, but you get the whole gorilla" - Kevlin, when talking about component re-use
- "Functionality is an asset, code is a liability"
- "Code re-use leads to exploding rockets"

**Book Recommendations**

- [Pattern-Oriented Software Architecture](http://www.amazon.co.uk/Pattern-Oriented-Software-Architecture-Volume-Patterns/dp/0471958697/ref=sr_1_1?ie=UTF8&qid=1362513603&sr=8-1)
- [Software Craftsmanship - The New Imperative](http://www.amazon.co.uk/Software-Craftsmanship-The-New-Imperative/dp/0201733862/ref=sr_1_sc_1?ie=UTF8&qid=1362513626&sr=8-1-spell) - described as quite simplistic, but with some good points
- [97 Things Every Programmer Should Know](http://www.amazon.co.uk/Things-Every-Programmer-Should-Know/dp/0596809484/ref=sr_1_1?ie=UTF8&qid=1362513643&sr=8-1)

# Second Morning Session

**Presenter:** Kevin Jones (you can find him on twitter [here](https://twitter.com/kevinrjones) and on GitHub [here](https://github.com/kevinrjones))

**Topic:** Building interactive clients with knockout.js

 > Client side development in the browser is becoming more and more important. Clients expect highly interactive applications that respond quickly to changes. To manage this developers have to cope with the demands of JavaScript. While jQuery is a fantastic tool, sometimes it feels too low-level and maybe needs something layered on top. One such layering is knockout.js. This provides an MVVM programming model for the browser. This talk looks briefly at the basis for MVVM and then into the details of knockout.js. We will cover the data-binding that is at the heart of this toolkit looking for example at how knockout does data updates and computed values. We will also see how knockout can work with your server-side coding.

**Thoughts**

I went to Kevin's full day session on Unit Testing at last years DevWeek so I knew that he is a great speaker, and I am happy to say that again, I was not disappointed.  Through a number of examples, each building on top of each other, we were provided with a very good introduction to what knockout.js is, and how it can be used.

At one point, Kevin seemed to go off on a bit of tangent when trying to describe a particular situation, when his demo didn't do what he expected.  He was able to turn this around very well though, and the end result was a discussion about using "debugger" on the click event of any bound element to step into the JavaScript debugger of the browser you are using to enable you to figure out exactly what is going on, and what contexts are being used by knockout.js.  This was the number one takeaway from this session.  This technique is described in this [StackOverflow question](http://stackoverflow.com/questions/9261296/any-good-techniques-to-debug-template-binding-faults-for-knockout-js).

**Takeaways**

- Two way bindings, by default, are applied with you tab off an element, i.e. lostFocus, but this can be changed
- i.e. you can use valueUpdate binding with a value of say afterKeyDown
- Knockout.js intellisense is coming in Visual Studio 2012 Update 2
- When using a foreach binding, no HTML will be rendered if the collection is empty
- There is a mapping plugin for knockout.js with helps with mapping to and from JSON when communicating with the server
- It is possible to create your own extensions for knockout.js
- There is a validation extension for knockout.js
- I believe that the code used in this session will be put [here](https://github.com/kevinrjones/DevWeek2013) in Kevin's github repo

**Quotes**

- "jQuery is non trivial to use, but I love it like a brother"
- "If your heart gives out, I am not responsible" - when discussing the amazing HTML interface that he was creating

# First Afternoon Session

**Presenter:** Scott Allen (you can find his blog [here](http://odetocode.com/blogs/all), and twitter [here](https://twitter.com/OdeToCode))

**Topic:** The new world of HTML5 and CSS3

> WebSockets, Webworkers, animations, transitions, and SVG. These are just a few of the new capabilities we can use to build applications with modern browsers.
> In this session we’ll give overviews and demonstrations of these new features and see how to build applications with the latest standards.

**Thoughts**

This was a very good talk.  Scott's laid back approach to presenting makes it very easy to get absorbed in what he is saying, and you don't realise where the time goes!  The 90 minutes were up very quickly!

The only thing that I would say is there was a lot of jumping between the PowerPoint version of his slides, and an HTML version of his slides.  I think he could have quite easily done the entire presentation from the HTML version, rather than just showing the demos from the HTML version.  Not sure why he took the decision to do it this way.

**Takeaways**

Throughout this talk, there were a number of sites that were shown that really help you get started with HTML5 and CSS3, so some of the below are simply links to these sites.

- [http://caniuse.com/](http://caniuse.com/) - very cool site which shows which elements are supported in which browsers
- [http://html5test.com/](http://html5test.com/) - provides a score for browsers in terms of how well they implement HTML5.  For instance, at the time of writing, Chrome scores 463.
- [http://html5boilerplate.com/](http://html5boilerplate.com/)
- [http://www.css3.info/preview/](http://www.css3.info/preview/) - site showing how CSS3 can be used
- [Interesting post about HTML5](http://www.brucelawson.co.uk/2009/redesigning-with-html-5-wai-aria/)
- [Google Fonts](http://www.google.com/webfonts) - a site to provide the necessary CSS to enable certain fonts on your site
- Declare the language encoding that your site uses as early as possible in the page
- [http://thehtml5quiz.com/](http://thehtml5quiz.com/) - how many html elements can you name in 5 minutes?
- HTML 5 video tag doesn't support DRM
- For debugging WebSockets, you can't use fiddler right now, you would need to use something like WireShark
- The code for the session can be found [here](https://t.co/3vineLMtJN)

# Second Afternoon Session

**Presenter:** Andrew Clymer (you can find his blog [here](http://andyclymer.blogspot.co.uk/), and twitter [here](https://twitter.com/andrewclymer))

**Topic:** Taking advantage of C# 5 async/await

> .NET 4 introduced the new ‘task’ abstraction, and C# 5 will take advantage of integrating this into the language via the async and await keywords. Furthermore, the new task abstraction promotes a new way of architecting asynchronous behaviour; in this talk we will explore how to take advantage of these new keywords and other new types and features being exposed in the next version of .NET to deliver far simpler asynchronous Windows UI's.

**Thoughts**

I was very much looking forward to this talk.  I have seen the usage of async/await before, and I have played with it in a Windows Phone application that I was creating, but I was interested to find out more about it.  There was no faulting the speakers knowledge on the subject, it was excellent, however, there were a couple of things about the talk that were slightly off-putting for me.

Firstly, the use of a second person, Richard Blewett, on stage to drive the transition of the slides, and also to generate the code.  For me, this didn't really work.  Rich was using Andrew's laptop that had a different configuration than he was used to which meant that there were problems when building and running code.

Secondly, when requesting that a slide be moved to the next one, there was a click of the fingers, which again for me, was quite off-putting.

**Takeaways**

There were actually some really interesting takeaways from this session.

- I really liked how the history of asynchronous methods have changed through the different version of the .Net Framework
- Anything that takes longer than 15ms to complete shouldn't be done on the UI thread
- You can only use the new async key word on a method that returns a void, or a Task<T>
- Using async/await makes the compiler do the work of creating the continuations that you would have otherwise have to create yourself
- There are techniques to use CancellationTokenSource and IProgress to provide updates back to the UI and to control execution of the Task
- Whenever you are using a thread, whether in UI code, or on the server, you should look to implementing async/await to release threads when not being used.
- I am expecting that the code for the presentation will be available [here](http://rocksolidknowledge.com/Conferences.mvc/)

**Quotes**

- "If an application doesn't respond, hit it harder, just like the kids, they respond to that" - said jokingly when discussing the lack of response from the UI when blocked by executing code
- "She can crack an iPhone screen with her finger" - again, when discussing the frustration felt by users when waiting on a non-responsive UI

# Overall Thoughts

As always, a very well executed day at DevWeek.  Everything seemed to run very smoothly.  The venue is amazing (even though it is a bit of a hike from the exhibition area to some of the rooms for talks), and the food for lunch and breaks is excellent.  Looking forward to tomorrow.  I took a few pictures on my phone, which you can see below:

<div id="flickrembed"></div><small style="display: block; text-align: center; margin: 0 auto;">Powered by <a href="https://flickrembed.com">flickr embed</a>.</small>

<script src="https://flickrembed.com/embed_v2.js.php?source=flickr&layout=responsive&input=72157676537691300&sort=0&by=album&theme=default&scale=fit&skin=default&id=5850544461b40"></script>
