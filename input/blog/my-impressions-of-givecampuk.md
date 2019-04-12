---
Title: 'My impressions of #GiveCampUK'
Published: 29/10/2011
Tags:
- charity
- givecampuk
- theyoucanhub
RedirectFrom: blog/my-impressions-of-givecampuk/index.html
---

[![](http://www.givecamp.org.uk/content/images/givecamp-header.png)](http://www.givecamp.org.uk/)

## It was a great event!

Now that the dust has settled, and everyone has returned home after GiveCamp UK, I thought it was time to reflect on the weekend.  Was it good?  Was it bad?  What could be done better?

Bottom line, I thought it was an amazing event, and from a personal stand point, I got a lot out of the event, and I would happily take part in future events like this.

The first thing I have to say is a tremendous well done, and thank you, to all of the organisers of this event.  They really did an amazing job and they should be very proud of themselves.  Congratulations to [Paul Stack](http://www.twitter.com/stack72), and [Rachel Hawley](http://www.twitter.com/rachelhawley)!!

What follows is how the weekend of GiveCamp UK broke down for me, and the members of [TheYouCanHub](http://theyoucanhub.org.uk/) charity team.

## Friday, 21st October 2011

My intention was to get into London reasonably early on Friday afternoon so that I could help Paul with anything that needed doing, and since I was travelling from Nottingham, I thought that this would be reasonably easy to achieve.  However, due to a problem with getting a taxi sorted out, I missed my train, and had to wait for the next one!

Anyway, after arriving in London and checking into my hotel, the next problem was finding the UCL venue.  Although located in a great place, I haven’t been to London very often, and finding my way around, is still a bit of a problem.  Help was at hand in the form of a tweet from [Dave Sussman](http://www.twitter.com/davesussman) which directed me straight to the North Cloisters building of UCL.  Thanks Dave!

Not long after, Paul arrived with his car jam-packed full of crisps, juice and various other snacks, which was to be the staple diet of the eager programmers over the weekend.  With that unloaded, Paul asked if I could help him with another run to the cash and carry to pick up even more food!!

What happened next I hear you ask?  Well, we spend the next 3 hours travelling the 24 miles to the cash and carry!!  This was the first time that I had properly experienced London traffic, and it is not something that I am keen to do again!

As a result, we both missed the start of the GiveCamp UK introductions, but thankfully Rachel stepped up and got everyone organised, and we kept up with what was going on through the #GiveCampUK hash tag.  En route back, Paul gave me a quick overview of the Charities that were going to be attending the event, and what sort of projects they were looking to get completed.  On arrival back to UCL I set about starting to find a team that I could join.  People were already starting to naturally fall into groups and having not been there since the start, I did feel a little bit like an outsider, however, I then met up with Daniel Elliott (Team Lead) and Phil Jones, who were going to be working on [TheYouCanHub](http://theyoucanhub.org.uk/) team, so I decided to join them.

With the team fully formed, we set about having a quick chat with Mel and Lou from [TheYouCanHub](http://theyoucanhub.org.uk/).  The were not able to make it in person, but we were able to chat to them on Skype.  They already had a very clear idea about what they wanted to achieve, and had detailed everything in a number of documents which they were able to send to us.  We essentially had a full set of requirements!

Their brief broke down quite simply...

Take their existing WordPress site, and make it better!  They had already identified a number of other websites which they liked, and we were able to take a lot of ideas from them, and make a decision about how we were going to proceed.

Now, some of you out there might be thinking “_**a WordPress site... Really? Where is the coding?**_” And I will be honest, for a while there, I was thinking the same.  However, at the end of the day, WordPress does what it does very well, and Mel and Lou wanted to use something that they were familiar with, so there was no point in trying to roll out a custom system so that we could actually cut some code.

The rest of the evening was used to plan out what we were going to do over the next day and a half, as well as searching through the extensive array of WordPress Plugins and Themes to see what we could make use of.

As I left UCL to head back from the hotel there were still a number of teams busy working hard, and I have to say that I did feel a little bit guilty leaving, however, we had done everything that was required for this evening, and we all thought that it would be best to get an early’ish night, ready for a full day tomorrow.

## Saturday, 22nd October 2011

Woke up at 0700 and headed down to UCL.  By 0830 all the team members had arrived apart from one.  We were a man down!  Never mind though, we soldiered on, and we were committed to getting the job done.

The first real order of business was to get a WordPress site up and running so that we could begin testing and configuring the site in the way that was required.  This started out as everyone installing their own copy of WordPress on their laptops (which can be easily achieved using the [Microsoft Web Platform Installer](http://www.microsoft.com/web/downloads/platform.aspx)).  However, it quickly became apparent that this wasn’t going to work out.  Every time something was done on one machine, it would need to be done on another machine to test it.

We started to have a play with Heroku and AppHarbor (which Paul had organised to be used by the teams) but no one on the team had used these before, so rather than waste time trying to get it up and running, I set up a quick sub-domain on my own hosting provider, and got WordPress up and running.

With that in place we were able to work on one environment, and include everyone’s additions at the same time.  This did introduce it’s own problems, with a couple of people editing the same files at the same time, but once some processes had been put in place, this wasn’t an issue.

After a couple of hours, we “thought” we had something that quite closely resembled what the charity wanted, and really what was required next was confirmation of what they wanted, so that we could begin the “tidy-up” phase.

Mel and Lou from [TheYouCanHub](http://theyoucanhub.org.uk/) arrived around lunch time, and we sat down and had a chat about what we had achieved.  Although they liked what we had done so far, it was clear that we had missed one crucial requirement, and it was time to go back to the drawing board.  I sat down and had a lengthy chat with Lou and was able to stub out exactly what they were trying to achieve.  With that in place, it was time to, literally, start again.

At this point, rather than continue with the WordPress site I had hosted on my hosting provider (**_SHAMELESS PLUG ALERT_**: They are called [Blacknight](http://tracking.blacknight.com/aff_c?offer_id=5&aff_id=37), and offer a great service!) we checked to see whether we could start to use their “live” WordPress site.  We got an agreement to do this, so we set to work, with the first order of action to find a WordPress Plugin to do a complete back up of the entire site, including the database, in case things went wrong!

Due to the fact that I had got a grasp of the requirements from Lou, I was given the responsibility of issuing tasks to the Team members, which I “think” I did an alright job of.  This change in direction saw us retiring the WordPress theme that we had identified as being a close fit, and instead re-writing a new custom template from scratch.  Dibs have to go to the two Phil’s for bringing this all together!

We ended up working far later than we thought we were going to have to, as we actually thought we were going to be finished early, but never mind.  Again, it was back to the hotel for a few hours sleep before getting up early again.

## Sunday, 23rd October 2011

Woke up at 0700 and headed down to UCL.  Again, the entire team was there quite early, and we set about putting the finishing touches to the site.  The site really started to come together once we had some images to put on it.  Mel did an amazing job of communicating all of this to us via email, and very quickly the site started to look complete.  “_Lorem ipsum_” placeholders started to be replaced by actual content, and we could see the site coming together in front of us.

Sooner than expected, 12:00 came round, and we had to down tools, and make sure that everything was finished up, and that everything was checked into Source Control.  For us, that meant taking a full backup of the web server directory and database backup and pushing this up to GitHub.  With that done, and laptops packed away, it was a case of tidying up and the North Cloisters area of UCL, and then heading outside to chill out in the sunshine and to enjoy some of the amazing hog roast that had been cooking outside since the small hours.  It was very yummy! All around there were smiling faces, and although everyone was very tired, it was clear to see that everyone had a great time!

At 1500 we moved to a lecture theatre where we got presentations from each of the teams regarding what they had created over the course of the weekend.  For our team, check out the following [video](http://www.youtube.com/watch?v=22E7oTzP1Os) which shows Daniel giving an interpretive dance!  I am very proud of the fact that we were actually able to demo the live site at the presentation.

It really was great to see what everyone had achieved, and several of the charities were represented at the presentations and it was amazing to see and hear their reactions to what they were going to be receiving.  It really did make it all worthwhile.

Following the presentations, there was a swag giveaway (with prizes totalling over £30,000).  Everyone who attended GiveCamp UK was given an 80GB SSD Hard Drive, which Paul had kept as an extra special surprise for the attendees.

After that, with the crowd starting to thin out, Paul and Lorraine gave me a lift to London Heathrow for my plane back up to Aberdeen.  Thanks again for the lift!

## What happens next?

You may be wondering what happens to the Charities, now that they have received everything from the teams?  What happens when something goes wrong, or they need something else done to it?  I can’t speak for the rest of the teams, but we have agreed to make available a couple of hours a month of our own time to help out with anything that they need.

## The Team

I wanted to say a personal thanks to all the members of [TheYouCanHub](http://theyoucanhub.org.uk/) GiveCamp UK team.  It really was a pleasure meeting with you and working on this project.  You can see us pictured below courtesy of [Bert Craven](http://www.flickr.com/photos/bertcraven/).

[![DSC_0068](http://farm7.static.flickr.com/6239/6273838572_27d57c4fb0.jpg)](http://www.flickr.com/photos/bertcraven/6273838572/)


- Daniel Elliott ([@agileguy](http://twitter.com/#!/agileguy))
- Phil Jones ([@philjones88](http://twitter.com/#!/philjones88))
- Phil Leggetter ([@leggetter](http://twitter.com/#!/leggetter))
- Victoria Williams ([@ToriCWilliams](http://twitter.com/#!/toricwilliams))
- Reza Mahmood ([@302Redirect](http://twitter.com/#!/302redirect))
- Chirdeep Tomar ([@chirdeeptomar](http://twitter.com/#!/chirdeeptomar)) – although we lost Chirdeep after the first night

## The Charities

Details of all of the charities involved in this years GiveCamp UK can be found on the blog [here](http://www.givecamp.org.uk/blog/introducing-our-givecamp-uk-2011-charity-projects).

## The Sponsors

Finally, a huge thank you has to go to all the sponsors and contributors, without whom the event would not have gone ahead.  A full list of all of these can be found [here](http://www.givecamp.org.uk/sponsors) with more information [here](http://www.givecamp.org.uk/blog/givecampuk-swag).  I have already got my 80GB SSD Hard Drive that all GiveCamp UK attendees were given, courtesy of CTT, installed and working on my laptop!

## The Wildcard Project

As mentioned in the blog post [here](http://www.givecamp.org.uk/blog/introducing-our-givecamp-uk-2011-charity-projects) there was a special wildcard project created who were going to be starting the first phase of a completely open source CRM system that charities could use.  If you are interested in taking a look at what they achieved, you can see the code [here](https://github.com/GiveCampUK), the project is called GiveCRM.

## Other Bloggers

If you are interested to hear what other people had to say about the event you can take a look at the following links (I will try to update this section as I become aware of other posts).

- [Thanks for GiveCampUK 2011](http://www.givecamp.org.uk/blog/thanks-givecampuk-2011) - Paul Stack ([@stack72](https://twitter.com/#!/stack72))
- [The Start of Something Big – GiveCampUK](http://blog.eduserv.org.uk/2011/10/28/the-start-of-something-big-givecampuk/) - Kieran Marron
- [Give Camp –The Team Leader’s Dilemma](http://garyshortblog.wordpress.com/2011/10/27/give-camp-the-team-leaders-dilemma/) - Gary Short ([@garyshort](https://twitter.com/#!/garyshort))
- [GiveCamp UK 2011 – A Retrospective](http://dylanbeattie.blogspot.com/2011/10/givecamp-uk-2011-retrospective.html) - Dylan Beattie ([@dylanbeattie](https://twitter.com/#!/dylanbeattie))
- [GiveCamp UK – a philanthropic software development microcosm](http://www.markeverard.com/blog/2011/10/26/givecamp-uk-a-philanthropic-software-development-microcosm/#givecampuk) - Mark Everard
- [My GiveCampUK weekend (21st to 23rd October, 2011)](http://www.tomasmcguinness.com/2011/10/24/my-givecampuk-weekend-21st-to-23rd-october-2011/) - Tomas McGuiness ([@tomasmcguiness](http://www.twitter.com/tomasmcguinness))
- [#GiveCampUK 2011 - Oh My](http://codebork.com/2011/10/25/givecampuk-2011-oh-my.html) - Alastair Smith ([@alastairs](https://twitter.com/#!/alastairs))
- [GiveCampUK–one very busy weekend](http://designcoderelease.blogspot.com/2011/11/givecampukone-very-busy-weekend.html) - Nathan Gloyn - ([@nathangloyn](https://twitter.com/#!/nathangloyn))
- [GiveCRM - the free non-profit CRM solution, born at GiveCamp UK](http://www.givecamp.org.uk/blog/givecrm---a-free-crm-option-for-charities-and-non-profits-developed-at-givecamp-uk) - Kendall Miller ([@kendallmiller](http://twitter.com/#!/kendallmiller))
- [Bringing people together, doing amazing things - GiveCampUK](http://melfindlater.wordpress.com/2011/11/16/bringing-people-together-doing-amazing-things-givecampuk/) - Mel Findlater ([@melfindlater](https://twitter.com/#!/melfindlater))
- [GiveCamp](http://philpursglove.blogspot.co.uk/2012/03/givecamp.html) - Phil Pursglove ([@philpursglove](https://twitter.com/#!/philpursglove))

## GiveCamp UK 2012

Are you interested in taking in part in next years GiveCamp?  If so, register your interest [here](http://www.givecamp.org.uk/StayInformed) so that you can keep informed about what is going on.
