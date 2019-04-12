---
Title: Review of Day 3 of DevWeek
Published: 31/3/2012
Tags:
- day 3
- developer
- devweek
- events
---

What follows is a brief summary of the sessions that I attended at the 3rd overall day of DevWeek (the second day of actual sessions).  Reviews of the other days of DevWeek can be seen here:

- [Day 1 - Pre-Conference Workshops](http://www.gep13.co.uk/blog/review-of-day-1-of-devweek)
- [Day 2 - Conference Sessions](http://www.gep13.co.uk/blog/review-of-day-2-of-devweek)
- [Day 3 - Conference Sessions](http://www.gep13.co.uk/blog/review-of-day-3-of-devweek)
- Day 4 - Conference Sessions
- [Day 5 - Post-Conference Workshops](http://www.gep13.co.uk/blog/review-of-day-5-of-devweek)

# First Morning Session at DevWeek Day 3

**Presenter:** Richard Blewett (you can find him on twitter [@richardblewett](http://www.dotnetconsult.co.uk/weblog2/) and his [blog](http://www.dotnetconsult.co.uk/weblog2/))

**Topic:** What’s new in WCF 4.5

> The WCF team has been busy. WCF 4.5 comes with a host of new features: further configuration simplifications, WebSockets support, contract first development and more. This session shows you the new features, explains why they were introduced, and examines what impact they will have on the way you build distributed systems.

**Thoughts:** I know a lot of people slate WCF, and haven’t got anything good to say about it, but my experience has been that it works for what it was intended, and we have used it with a lot of success in-house.  I was very keen to see what features were coming in 4.5, and I wasn’t disappointed.  Richard was able to fully explain the up and coming features, even though he did have some issues with his Windows 8 Virtual Machine and Virtual Box near the start of the session.  If you are interested in seeing what it on offer, I would highly recommend taking a look at the slides for this session when they are made available on the DevWeek website.  One of the many interesting features that comes with this release is the ability to implement UDP and a true “fire and forget” broadcast of messages, which as demonstrated in the session is quicker than standard TCP (assuming of course that you are able to handle the potential for missed packets).

# Second Morning Session at DevWeek Day 3

**Presenter:** Jeff Prosise (you can find him on twitter [@jprosise](https://twitter.com/#!/jprosise) and his [blog](http://www.wintellect.com/cs/blogs/jprosise/))

**Topic:** Building cross-platform mobile applications with HTML5 and PhoneGap

> Windows Phone 7 is a great platform, but the greatest challenge facing mobile developers today is writing apps that run on all the popular mobile platforms. With HTML5 and PhoneGap, you can write apps that exploit native features of the operating system and run on a wide range of devices. And the recently released PhoneGap 1.3 makes Windows Phone 7 a first-class citizen in the PhoneGap environment. Join the fun as Jeff explores the world of cross-platform mobile development and demonstrates the pros and cons of going HTML5 versus going native.

**Thoughts:** Although I had attended Jeff’s full day session on HTML5, I was so impressed with him as a speaker that I decided to check out this session as well.  Once again, Jeff simply told you straight what was good and what wasn’t.  Although the idea of developing once and deploying everywhere is an appealing thought, in practice, the result is not always perfect.  The examples that Jeff showed where he made use of the device accelerometer, and also populating a ListBox full of contacts showed that the performance of the resulting application was not up to scratch.  Although it was “ok” it isn’t really something that you would like to put into the hands of a customer.  Now, admittedly, some of the performance issues were down to the browser on the phone, for instance the handling of CSS in Internet Explorer on the Windows Phone 7 device, however, most of the issues are down to the interfacing between JavaScript and the native phone functions.  This is likely something that will improve over time, and the ideal that is develop once and deploy everywhere may become a true option.  For now, depending on the type of application that you are creating, using a technology such as PhoneGap won’t cut it, however, it is a technology that I will be keeping an eye on.  Another great session from Jeff, thanks!

# First Afternoon Session at DevWeek Day 3

**Presenter:** Matt Milner (you can find him on twitter [@milnertweet](https://twitter.com/#!/milnertweet) and his [blog](http://mattmilner.com/blog/))

**Topic:** OData everywhere!

> More and more servers and systems are providing access to their data via OData, the open standard protocol for data exchange on the internet. In this session learn how to use your .NET skills to publish and consume that data from a variety of clients. We will start by showing the very elegant .NET client solution for OData services, and quickly move into the different libraries available for each client platform to understand the unique features and constraints of each.

**Thoughts:** DevWeek really has been full of great sessions, and this one was no different.  Matt is a great speaker, and it is easy to see why Pluralsight have picked him up as an author for their videos.  This time the topic was OData, again, another technology that we make use of from time to time.  The big selling point of OData is that once you have used it in one place, the interface and integration of it in another system, is very similar.  Granted, the data that is being exposed is going to change, but the way in which it is accessed is exactly the same, so you don’t have to worry about re-learning another system, each time you want to use it.  The new tooling support that comes in .NET 4.5 and Visual Studio 11 extends the already existing functionality to make working with OData trivial, both on the server and on the client.  There were a lot of take away points from this session for me, not least the tooling the is available on the OData Eco System to make working with OData that bit easier.

# Second Afternoon Session at DevWeek Day 3

**Presenter:** Christian Weyer (you can find him on twitter [@christianweyer](https://twitter.com/#!/christianweyer) and his [blog](http://weblogs.thinktecture.com/cweyer/))

**Topic:** Real-world experience with Windows Azure

> No doubt: cloud computing is here. And we as .NET-branded developers can participate in the big game with the Windows Azure platform. In this session Christian reports first experiences from real world projects and demonstrates a couple of lessons-learned and various good practices. A number of things are very different when you are running on a Platform-as-a-Service (PaaS) like Windows Azure and the earlier you know and think about them the better it will be for your eventual cloud success. Come and hear about Azure-related topics like cost-oriented architecture, development & deployment, diagnostics & monitoring, optimisation or handling databases

**Thoughts:** Wow!  Just wow!  Hands down, I think that this was the most enjoyable session that I went to at DevWeek.  I have to say a big congratulations to Christian, he is very good at what he does, and like some of the other presenters at DevWeek he simply don’t it like it is, which is something that I really enjoyed about DevWeek.  On his opening slide, Christian had two sections, “What to expect” and “What not to expect”, one of which was “No Marketing FUD!”

Having looked at Windows Azure for a while now, but never actually getting a chance to use it in anger, I was very curious to hear about how Windows Azure had been used in the wild, and Christian was very much able to deliver on this.  He had a number of real life applications, some of which he was even able to show us running live in the cloud.  He was even able to deal with what were probably my annoying questions from the back of the room, and I can honestly say that I got a huge amount of information from this session, thank you very much!

Two stand out items from this talk, for me, were the correct pronunciation of the word “Azure” (he had a WAV file that explained exactly how to say it) and also an explanation of what the word Azure actually means.  If you are unsure, take a look at the Wikipedia article for Azure, specifically about how it relates to clouds.

However, hands down, the most interesting demonstration was the ability to push a zip file, which contains an entire website into Blob Storage, and then have a background task running on a Web Role pick this up, and deploy it into IIS and start-up the site.  This was an amazing demonstration! Simply put, a lot of people complain about the start-up time of a Windows Azure deployment, but this demonstration showed an entire web site being deployed within a minute!  Although this is custom code running in his Cloud instance, Christian did hint at the fact that functionality such as this may well be making it into an Azure Platform near you in 2012.  Exciting times!
