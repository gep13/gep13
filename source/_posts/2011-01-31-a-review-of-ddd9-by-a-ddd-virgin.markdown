---
author: gep13
comments: true
date: 2011-01-31 12:27:19+00:00
layout: post
slug: a-review-of-ddd9-by-a-ddd-virgin
title: A review of DDD9 by a DDD Virgin
wordpress_id: 28
tags:
- DDD
- DDD9
- Microsoft
- Reading
---

In all honesty, I wasn’t sure what to expect from DDD9.

I had heard from a few people that it was a great event, and that they had learnt a lot from attending the previous years, but if I am honest, I was a little dubious about going.

The main reason for this was the distance that I had to travel to get there.  Hailing from north of the border (Aberdeen) meant that I had to get a plane to Heathrow, then a bus to Reading and then a walk to the hotel, all in all, a bit of a trek for a completely unknown event.

However, after reading the session synopsis’s on the developerdeveloperdeveloper.com website, I decided that there was enough interesting sessions that would make the trip worthwhile.

So, what was the result?

**It was an AMAZING event! **

Sorry for shouting ![Smile](http://www.gep13.co.uk/blog/wp-content/uploads/2011/01/wlEmoticon-smile.png)

I have to give a lot of respect to the organisers, they put on a phenomenal event.  I can’t imagine how much work they had to do in terms of organisers speakers, etc.  Congratulations!!  I have to say a big thank you also to Microsoft for providing the venue and the catering.

So, how did the day break down for me?

**At the hotel**

I had thought that I would get one of the coaches (supplied by DevExpress) to Thames Valley Park, however, once I arrived at the Reading Central Premier Inn, I checked Twitter, and I saw a shout out from @philpursglove saying that he had space in his car, so I asked if I could get a lift, and I was told yes, woot!

However, when morning came, and I couldn’t see any fellow geeks in the hotel lobby, I started to get a bit worried (bear in mind I hadn’t met Phil before) and I started wondering if Phil was perhaps staying at a different Premier Inn, as I hadn’t actually confirmed which one he was staying at, oops!

I started thinking that I should head for the coach instead as I didn’t want to have to try to catch a taxi.  A quick text to @stack72 informed me that @nathangloyn was also staying at this Premier Inn (someone else I hadn’t met before), and within a few minutes Nathan had met me in the lobby, and I gratefully accepted the offer of his lift to Thames Valley Park (sorry to mess you around @philpursglove)

**In the car/Arrival at Thames Valley Park**

_Note to Google Maps:_

_Please update your map information for Reading Town Centre, as I think there have been some road works since you last did it!!_

After ignoring Google Navigation on Nathan’s HTC Desire, we managed to find our way to the Microsoft Offices in Thames Valley Park.  Having never been there before, I was blown away at the scale of the buildings, they were huge!

We were directed to Building 3, and parked up.  On entering the building, we were issued with our name badges, and Nathan went to meet the other speakers (he was giving a talk in the afternoon on S.O.L.I.D, which wasn’t on my list of sessions to see, oops!  Sorry Nathan).  I was then directed into the main waiting area, between the Chicago 1 and 2 meeting rooms, where I was told that there was bacon rolls and drinks (why did I have breakfast at the hotel?!?  _Note to self, don’t do this if you go back next year!_).

Within this area there was a book stand, and further round the corner there was a Kinect for use by the delegates.  Watching full grown geeks jumping about in front of what must of been, at least, a 50” screen was quite amusing!!  Back to the book stand, which was offering a 25% discount on all books, meant that I had to buy some.  I bought two books, one of Windows Phone 7 and the other on MSBuild, Both from Microsoft Press.  A bit of light reading for the plane home.

I had arrived reasonably early, which meant that the hall wasn’t that busy, but it quickly filled up, and it got to the point that you couldn’t move.  This is a VERY popular event!!

**Session 1 - AJAX with jQuery (@GeorgeAdamson)**

Wow!!!

Having read the description of this talk:

_“George's presentation style is entertaining and leaps along at quite a rate. (If you've attended George's Get Going with JQuery session then you have an idea what you're in for.) “_

I knew I was in for something quite different, but I wasn’t prepared for what I got.  George is an amazing presenter, and he quickly draws you into the topic, his enthusiasm for the topic is addictive!!  There was a “slight” malfunction near the start, where his first demonstration didn’t want to work properly, but by the end of the talk, this had been completely forgotten.  I have used a small amount of jQuery in the past, but never sunk my teeth into it.  The demonstrations that were given (Closures, Hijax, JSON, JSONP, AJAX Tabs), cemented in my mind that this is something that I need to look into!!

Quote of the session from George:

_“Your non-techy user has just let out a little bit of wee….”_

**Session 2 - Real World Application Development with NHibernate, FluentNHibernate and Castle Windsor (@chriscanal)**

I was really looking forward to this presentation.  I have had a presentation on NHibernate before, but I have never used either FluentNHibernate or Castle Windsor, and to see a presentation on these in the context of an ASP.Net MVC Application (another area of interest to me), it sounded perfect!

Unfortunately, after the session, I am still no clearer on what these technologies are, and why I would use them.  Chris is obviously well versed in this area, and I don’t question his knowledge, however for me, it didn’t come over very well.  We jumped straight into a full blown project, with reference to interfaces and containers that I had never heard of, with little or no explanation as to what each of these tools would be doing for us.  Now it might just have been my lack of knowledge that prevented me getting anything out of this session, and people already familiar with all of these tools might have got a lot from it, but the session description made no indication that prior knowledge of these tools would be required.  If this is what is assumed, then it should be made clear in the description.

**Session 3 - Writing Maintainable Tests for Selenium (@automatedtester)**

Overall, a very interesting session!  Having never seen an automated web application testing framework in action, I was very curious to see one in action, and how you would actually go about writing tests for your site.  The short answer is that it is VERY easy, and I don’t see any reason why it can’t be done, on even small applications.  Selenium is definitely something that I will be looking into going forward, although, given the Silverlight applications that I am currently helping to develop, we might need to find an alternative framework, as Selenium can’t automate tests for a Silverlight application.

The trick to writing the tests is to separate the work of spinning up Selenium, and automating the page, from the logic of the actual unit test.  This is achieved through the use to the Page Object model, means that you can essentially abstract your unit tests away from the work of automating the web page.

The one thing that I think was missing from this presentation would have been to actually see the unit tests being run.  From what I understand, the presenter had assumed that there would be internet access at the presentation.  Since there wasn’t, he wasn’t able to spin up the tests.

**Session 4 - What's New in ASP.NET MVC 2.0 & 3.0 (@argibson)**

ASP.Net MVC is an area of interest for me.  I last time I looked at it though was when it first came out, back at MVC 1.0, and I was very interested to see what improvements have been made with the release of ASP.Net MVC 3.0.

I am happy to say that the presenter delivered in this regard.  He clearly described the key differences, and after his demonstration of the Razor engine, I think I could happily jump into an MVC application.  Previously I hadn’t “liked” the Web Forms View Engine within ASP.Net MVC.  The presenter mentioned that he will be building on his MVC Demos application, which is available on his blog:

[www.andy-gibson.co.uk](http://www.andy-gibson.co.uk)

And I will be interested in looking at this as it develops.

**Session 5 - Enforcing Code 'Beauty' with StyleCop (@guysmithferrier)**

Within my company, we are actually already using StyleCop, and I fully advocate the use of it.  The reason that I went along to this talk was to see if there were any aspects of it that we weren’t currently using, and I am happy to say that I did pick up some interesting information.  Guy’s presentation style is VERY good, and he was able to get his point across very well, with lots of laughs along the way.  He basically started out by pointing out all the things that are “wrong” with StyleCop, and then ended by explaining how all of these things can be alleviated, and how you can get up and running with StyleCop today, without any impact from legacy systems.

Things of interest from the talk:



	
  * The ExcludeStyleCop executable which can be used to exclude all the class files within a *.csproj file from being looked at by StyleCop

	
  * The idea of having a “StyleCop Friday Afternoon”, where at the end of a long week, you get developers to wind down by picking a class file which hasn’t been “StyleCop’ed” and they set about making it so.


Overall though, a most enjoyable session, thanks Guy!
**Session 6 - Beginners Guide to Continuous Integration (@stack72)**

When you consider that this was only Paul’s second or third time at doing this presentation (and his first time with some a big audience), you have to give him a lot of credit!  He did a VERY good job!!

His knowledge and enthusiasm for the subject matter came through very well, and like the first session I attended, addictive.  I have come away from the talk eager to look into what I can put in place within my company to improve on our “Continuous Delivery”.

In house, we currently use TFS for both Source Control and Automated Builds, but having seen a demonstration of TeamCity, I think we could easily switch to start to use this.  That might be a bit of a hard sell, and we will have to get buy in, but I will give it a try.

When I think about tying in the concepts of deployment, with the possibility of Selenium testing, I can start quickly seeing how integration problems and bugs can be quickly identified.

**Geek Dinner – Pizza Express**



	
  * Food – check!

	
  * Beer – check!

	
  * Interesting conversation – check!


Enough said.

**Overall Thoughts of DDD9**

Amazing!!  Well worth making the trip down to Reading, and I would happily attend events in the future.  That is, if I can get a place.  The popularity of this event, means that places for this event were grabbed up very quickly (within something like 12 minutes this year).

Congratulations again to all the organisers, you did a great job, and you should be very proud!!

I am looking forward to hopefully attending DDD Scotland later this year.
