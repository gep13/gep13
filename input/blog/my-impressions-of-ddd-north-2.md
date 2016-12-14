---
Title: My impressions of DDD North 2
Published: 14/10/2012
Tags:
- DDD North
- DDD
---

# All in all, a very good conference

This was my first DDD North that I had attended. I wasn't able to make it last year due to prior commitments, but I really wanted to attend this year based on all the good feedback that I had heard about last year.

In addition, in the same way that I submitted a session for [DDD South West](http://www.gep13.co.uk/blog/feedback-from-stylecop-presentation-at-dddsw/), I also decided to submit some [sessions](http://www.gep13.co.uk/blog/sessions-that-i-have-submitted-for-ddd-north-2012/) for DDD North. Luckily my session on Caliburn.Micro was selected for inclusion in the agenda. This was going to be the first time that I had spoken on Caliburn.Micro, and I was really looking forward to giving the session.

Overall, DDD North 2 went very well! I have to say a huge congratulations to the organisers, and helpers, they put on a great conference, and they should be very proud of themselves. I think the only thing that might be viewed in a negative light was the queue at the registration desk, however, this was due in part to everyone seemingly arriving at the same time. Everything else, the sessions, the venue, the food, the prizes, were all very good. Congratulations to everyone involved.

One really nice touch at this year's event was the speaker t-shirts. Printed on the back of the t-shirts is a list of all the DDD events that have happened both in the UK and further afield. I am wondering whether this new tradition is going to continue in future events.  You can see the back of the t-shirt below:

[![](http://www.gep13.co.uk/blog/wp-content/uploads/2012/10/WP_000313-768x1024.jpg)](http://www.gep13.co.uk/blog/my-impressions-of-ddd-north-2/wp_000313/)

This led to an interesting question about how many DDD Events you had attended, which led me to make this [blog post](http://www.gep13.co.uk/blog/ddd-attendance-leaderboard-where-do-you-rank/), hopefully we will find who has attended the most DDD Events.

As is always the case, community events such as this are a great opportunity to catch up with people. I am happy to say that I have been able to put a few more faces to twitter handles, and I had a great time chatting to various people at both the pre-conference dinner, as well as the geek dinner after the conference itself.

If you have never attended a DDD event before, then as I have said before, you definitely want to start. They are great events run by the community, for the community!

# First session

I had planned to ahead the Mike Taulty talk on Windows 8, however, when I got to the speaker room in the morning, I found that I wasn't able to RDP into my Hyper-V VM that I was using for my demos later on in the morning. I then spend half an hour stressing about what I was going to do, until someone suggested that I speak to Liam Westley ([@westleyl](https://twitter.com/westleyl)). After a quick SOS on Twitter, Liam came to the rescue and helped me get my VM up and running again. Thanks again for all your help!

# Second session

Although there were a number of talks that I would have liked to have seen in this second session, notably Guy Smith-Ferrier ([@GuySmithFerrier](https://twitter.com/guysmithferrier)) talking on Roslyn Refactorings, I decided my time would be better spent preparing from my own session.

# Third session

**Presenter:** Gary Ewan Park

**Topic: **Getting Started with Caliburn.Micro and Windows Phone 7

> Getting started with the Windows Phone 7 Development Platform is relatively simple, however, using a Framework like Caliburn.Micro takes away some of the more mundane tasks, and allows you to focus on what you are trying to achieve. In this session we will start with a blank Windows Phone 7 project, and start to create our first Windows Phone 7 application using features such as:
>   * ActionMessages
>   * Action Conventions
>   * Binding Conventions
>   * Navigation Service
>   * The Bootstrapper
>   * The IPhoneService
>   * Tombstoning
>   * Lauchers and Choosers
>   * The IWindowManager

**Thoughts: **Since this was my first time doing this talk, I was a little nervous, so I felt that I got off to a bit of a ropey start, but I would like to think that I pulled it together at the end. I will be interested to take a look at the speaker feedback when it is released. I did end up running slightly over time, which meant that I had to pull one demo from the presentation. However, all of the major topics that make Caliburn.Micro a great framework to use were covered, and I am hoping that the people who attended my session got a lot out of it. I would like to say a big thank you to those who did attend the session. I will be posting the slides from the presentation to this blog in the next couple days, so if you are interested to take a look, you are more than welcome, and I would welcome any feedback.

# Grok Talks

As has now become custom at DDD events, there were a series of Grok Talks presented during lunch. I was able to catch the majority of [Hermit Dave's](http://twitter.com/hermitdave) grok on using Windows 8 for development, but I wasn't able to stick around for any of the other ones. I was hungry, so went to get some food, which was very good J

# Fourth session

**Presenter:** Matt Lacey ([@mrlacey](https://twitter.com/mrlacey))

**Topic: **Introducing Windows Phone 8

> There's a new version of Windows Phone coming. But what does this mean for developers?
>
> What's new?
> What's changed?
> How do you upgrade an existing Windows Phone 7.x app?
> How do you support WP7.x & WP8 with one codebase?
> How do you develop for Windows Phone and Windows 8?
> Come to this session for the answers to all these questions and many more! ;)

**Thoughts:** I have to say that I got a lot out of Matt's session, there was a lot of information contained within his presentation. For instance, I wasn't aware that support for XNA was not going to appear in Windows Phone 8. This instead is going to be replaced with support for native C++ game development. I can see the logic behind this, but I can also see that some people will be annoyed at this. Part of me was really hoping to see some Windows Phone 8 development in action, but speaking to Matt before the session, this was never going to be the case. There are clear NDA's in place around the Windows Phone 8 SDK, and as a result, until this is made public, people can only speculate about what is, and isn't included. I personally think that this is an exciting time, and I am looking forward to getting started developing on WP8 as well as getting my Nokia Lumia 920 J

# Fifth session

**Presenter:** Joel Hammond-Turner ([@rammesses](https://twitter.com/rammesses))

**Topic:** Using your Nuget for Fun and Profit (Redux)

> The explosive take-up of NuGet clearly demonstrates just how valuable a packaging system for .Net can be.
> This session is a refined and improved repeat of that run at DDDSW - it will look the issues surrounding creating NuGet packages for use within your own organisation rather than for general consumption, and will look at the options for hosting a NuGet server both on-site and in the cloud.
> It will also demonstrate the NuGet.PackageNPublish tooling released by Landmark at DDDSW4 which makes creating packages to contain your libraries as easy as File->New Project.

**Thoughts:** I have been using both Nuget and Chocolatey a lot lately, so I was really looking forward to hearing how other people are using it. To date, I have been creating the .nuspec files manually, but it was very interesting to see how the [Package'N'Publish](https://github.com/JoelHT-Landmark/NuGet-PackageNPublish) framework could be used. I really think that this has some useful applications, and combining it with TeamCity could have some very powerful use cases. I will definitely be taking a look at this soon, to see how it can be incorporated.

# Geek Dinner

I think it is safe to say that everyone had a great time at the Geek Dinner.  On the table that I was sitting at Niall Merrigan ([@nmerrigan](https://twitter.com/nmerrigan)) made a point of enforcing the rule that all mobile phones had to be placed in the centre of the table, and only to be answered if believed to be an emergency.  This was a great way of breaking the ice on the table, and led to some really interesting discussions.  If you haven't tried this before, then the next time you are out at a meal suggest it!

# Other Bloggers

If you are interested to hear what other people had to say about the event you can take a look at the following links (I will try to update this section as I become aware of other posts, if I have missed anyone, feel free to give me a shout).

- [Much chin stroking at ddd north](http://johnnosnose.blogspot.co.uk/2012/10/much-chin-stroking-at-ddd-north.html) by [Johnno Nolan](https://plus.google.com/116370908952132256617/posts)
- [#dddnorth 2 write up – october 2012 – Bradford](http://idisposable.co.uk/2012/10/dddnorth-2-write-up-october-2012-bradford/) By [Terry Brown](https://twitter.com/terry_brown)
- [DDDNorth 2 Roundup](http://eventuallyconsistent.net/2012/10/14/dddnorth-2-roundup/) by [Steve Bate](https://twitter.com/Steve_Bate)
- [Dispatches from DDDNorth2](http://www.scottlogic.co.uk/2012/10/dispatches-from-dddnorth-2/) by [Sam Hogarth](https://twitter.com/samhogy)
- [Developer Developer Developer North](http://tellthemuserstories.wordpress.com/2012/10/15/developer-developer-developer-north/) by [Daley Chetwynd](https://twitter.com/dchetwynd)
- [The Morning Brew #1210](http://blog.cwa.me.uk/2012/10/15/the-morning-brew-1210/) by [Chris Alcock](https://twitter.com/calcock)
- [DDDNorth2 - quick review](http://thecogworks.co.uk/blog/posts/2012/october/dddnorth2-quick-review/) by [Ismail Mayat](https://twitter.com/ismailmayat)




# Source Code, Slides and Resources


If you are looking for the source code and slides for some of the presentations, have a look here.  I will try to keep this up to date as I find out about more of them



	
  * [Gary Ewan Park](https://twitter.com/gep13) - [Getting Started with Caliburn.Micro and Windows Phone 7](http://developerdeveloperdeveloper.com/north2/ViewSession.aspx?SessionID=975) - [Code](https://github.com/gep13/CaliburnMicroDemos) - [Slides](http://www.gep13.co.uk/blog/ddd-north-2-getting-started-with-caliburn.micro/)

	
  * [Nathan Gloyn](https://twitter.com/nathangloyn) - [Selenium a UI testing paradigm](http://developerdeveloperdeveloper.com/north2/ViewSession.aspx?SessionID=1028) - [Code](https://github.com/NathanGloyn/Selenium-UI-Testing) - [Slides](http://www.slideshare.net/Nathangl/selenium-ui-paradigm-ddd-north-2)

	
  * [Guy Smith-Ferrier](https://twitter.com/guysmithferrier) - [Riting Rosyln Refactorings: Harnessing The Compiler As A Service](http://developerdeveloperdeveloper.com/north2/ViewSession.aspx?SessionID=963) - [Slides and Code](http://www.guysmithferrier.com/page/Resources.aspx)

	
  * [Peter Shaw](https://twitter.com/shawty_ds) - [So Just What is Spatial SQL](http://developerdeveloperdeveloper.com/north2/ViewSession.aspx?SessionID=951) - [Slides](http://www.slideshare.net/shawty_ds/what-is-spatial-sql)

	
  * [Gary Short](https://twitter.com/garyshort) - [Raspberry Pi Deep Dive](http://developerdeveloperdeveloper.com/north2/ViewSession.aspx?SessionID=1045) - [Slides](http://rocksolid.gibraltarsoftware.com/vistadb/raspberry-pi-at-dddnorth)

	
  * [Liam Westley](http://twitter.com/westleyl) - [Async C# 5.0 - patterns for real world use](http://developerdeveloperdeveloper.com/north2/ViewSession.aspx?SessionID=947) - [Slides and Code](http://geekswithblogs.net/twickers/archive/2012/10/14/dddnorth2-bradford-13th-october-2012---async-patterns-presentation-and.aspx)

	
  * [Niall Merrigan](https://twitter.com/nmerrigan) - [Defensive Programming 101 V2](http://developerdeveloperdeveloper.com/north2/ViewSession.aspx?SessionID=986) - [Resources](http://www.certsandprogs.com/2012/10/ddd-north-2-resources.html)

	
  * [Matt Lacey](https://twitter.com/mrlacey) - [Introducing Windows Phone 8](http://developerdeveloperdeveloper.com/north2/ViewSession.aspx?SessionID=1047) - [Slides](http://blog.mrlacey.co.uk/2012/10/preparing-for-windows-phone-8-slides.html)

	
  * [Joel Hammond-Turner](https://twitter.com/rammesses) - [Using your Nuget for Fun & Proift (Redux)](http://developerdeveloperdeveloper.com/north2/ViewSession.aspx?SessionID=1038) - [Slides](https://github.com/JoelHT-Landmark/NuGet-PackageNPublish/tree/master/Documentation) - [Resources](http://www.youtube.com/watch?v=R6e4kV5dfIQ)

	
  * [Richard Garside](https://twitter.com/_richardg) - [The business of side projects](http://developerdeveloperdeveloper.com/north2/ViewSession.aspx?SessionID=962) - [Reading List](http://nogginbox.co.uk/blog/side-project-startup-reading-list)




# Photos


A number of people were taking photos on the day of the event and I will try to capture as many links as I can to various Flickr albums etc.



	
  * [DDD North 2](http://www.flickr.com/photos/55078960@N05/sets/72157631769689503/) by [Anthony Steele](https://twitter.com/anthonysteele)

	
  * [DDD North 2 - 13/10/2012](http://www.flickr.com/photos/craigmurphy/sets/72157631769547147/) by [Craig Murphy](https://twitter.com/camurphy)

	
  * [DDD North 2](http://www.flickr.com/photos/colinangusmackay/sets/72157631765310260/) by [Colin Mackay](https://twitter.com/colinmackay)

	
  * [SkyDrive Album](https://t.co/xo0UxAGO) by [Hermit Dave](https://twitter.com/hermitdave)

	
  * [Gibraltar Software at DDDNorth 2012](http://www.facebook.com/media/set/?set=a.10151115177983026.451777.211894228025&type=1) by [Gibraltar Software](http://www.gibraltarsoftware.com/)

	
  * [DDD North 2](http://www.flickr.com/photos/18885387@N00/sets/72157631774460566/) by [Peter Shaw](https://twitter.com/shawty_ds)

	
  * [Anything tagged with dddnorth on flickr](http://www.flickr.com/search/?q=dddnorth&f=hp)




# Sponsors and organisers


As always, a huge thank you has to go out to both the [sponsors](http://developerdeveloperdeveloper.com/north2/) and the organisers to DDD North. It is quite simple, without both free community events like DDD North simply wouldn't be able to happen. Thank you!


# DDD North 3 in 2013


Andy Westgarth, the organiser of DDD North has already confirmed the date for the next DDD North. This will be held on the 12th October 2013. This time around it will be back on the North East. His plan is to alternate between the North East and the North West in order to ensure that more people can get involved in the community. If you want to catch all the news about what is happening with DDD North make sure to follow them on [twitter](http://twitter.com/dddnorth).
