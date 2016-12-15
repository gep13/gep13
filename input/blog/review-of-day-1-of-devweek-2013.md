---
Title: Review of Day 1 of DevWeek 2013
Tags:
- Day 1
- DevWeek
- London
- Review
- SharePoint 2013
---

# Day 1 of DevWeek - SharePoint

Today was the first day of [DevWeek 2013](http://www.devweek.com/), and once again, I am happy to say that it was a great day.  As some of you will be aware, I attended [DevWeek last year](http://gep13.me/VhBYfB), and I got a lot out of it.  When I got the opportunity to attend again, I jumped at it.  In the same way as I did last year, I intend to write a blog post about each day, with thoughts, takeaways, and various links to interesting things that come up during the days.  Luckily, in the same way as last year, I will be attending the entire week of DevWeek.

Review of the other days of DevWeek can be seen here:

- [Day 1 - Pre-Conference Workshop](http://gep13.me/W0AJEP) (this post)
- [Day 2 - Conference Sessions](http://gep13.me/YuOPy2)
- [Day 3 - Conference Sessions](http://gep13.me/ZqTHU1)
- [Day 4 - Conference Sessions](http://gep13.me/13I4BKv)
- [Day 5 - Post-Conference Workshop](http://gep13.me/Y0Gj7A)

# Pre-Conference Workshop at DevWeek

**Presenter: **Sahil Malik (you can find his blog [here](http://blah.winsmarts.com/), and twitter [here](https://twitter.com/sahilmalik))

**Topic:** SharePoint 2013 workshop for developers

> Join us for a full day of SharePoint 2013 goodness. SharePoint 2013 has some remarkable improvements as compared to SharePoint 2010.
> This day covers what you need to know about SharePoint 2013 as a SharePoint 2010 or 2007 developer. It also covers what you need to know as an ASP.NET developer to get a quick on-ramp to SharePoint 2013.
> Overall we’ll aim to provide a comprehensive overview of what’s new in SharePoint 2013 in various areas, including apps, client-side technologies, security, BCS, workflows, WCM and internet facing sites, mobile development, search, and Business Intelligence.

# Thoughts

Due to the fact that we use SharePoint 2010 in-house, I was very interested to see what new functionality, abilities, modifications, etc, were coming with SharePoint 2013.  This is not an area that I have spent a lot of time looking into (there are no immediate plans to upgrade), but I was still very interested to hear what Sahil had to say.  I am very happy to say that I was not disappointed.

Sahil took us on a very fast paced, but interesting trip through:

- What there was in 2010 and earlier
- What was good
- What was bad
- What is new in 2013

The session was incredibly fast based, but this was due mainly to the sheer amount of content that Sahil had.  Although there was a lot to take in, Sahil did a great job of ensuring that everyone was following along, and also stopped to take questions from the audience when required.

All in all, it was a great session, that has left a lot to think about.  There are a number of key features in SharePoint 2013 that I could see being very useful in our current development efforts.

# Takeaways

There were lots of interesting topics discussed in this whirlwind discussion on everything regarding SharePoint 2013, but some of the main takeaways were:

- Claims Based Authentication is the default in SharePoint 2013.  You can enable the "old style" authentication, but this will only affect the SharePoint Portal.  Behind the scenes, everything else will still be Claims Based, so it will need to be embraced.
- SharePoint 2013 now using .Net Framework 4.5.  Hallelujah!!
- All workflows authored in SharePoint are now housed within the Workflow Management Site", which can be farmed off onto its own server.
- Some "stsadm" commands that worked in SharePoint 2010, may no longer work in 2013.  The guidance is to use the SharePoint PowerShell Interface instead.
- [PowerShell Web Access](http://blogs.msdn.com/b/powershell/archive/2012/06/27/windows-powershell-web-access-basic-installation-guide.aspx) - Very cool!
- [Test-SPSite](http://technet.microsoft.com/en-us/library/fp161259.aspx) and [Repair-SPSite](http://technet.microsoft.com/en-us/library/fp161269.aspx) - A great idea!  Especially since the tests that you can run are extensible!
- In the new SharePoint model, both Application Pages and Site Pages run under Full Trust, regardless of CAS policies.
- [NAPA Office 365 Development Tools](http://msdn.microsoft.com/en-gb/library/jj220038.aspx) - You can use a SharePoint 2013 App (authored by Microsoft) to create other SharePoint 2013 Apps
- The Client Side Object Model and ReST API for SharePoint 2013 has been completely overhauled.  Now much nicer to work with!

# Quotes

- "SharePoint teaches you a lot of patience!"
- "Working on it..." - this the new "loading" message that comes up whenever SharePoint is busy

# Book Recommendations

Sahil is the author of a number of [books](http://www.amazon.co.uk/s/ref=nb_sb_noss?url=search-alias%3Ddigital-text&field-keywords=sahil+malik&rh=n%3A341677031%2Ck%3Asahil+malik), but he has recently created a couple of new ones, which are only being released electronically.  He explained that this was for a couple of reasons, i.e. he can release updates to the book when there are some, and it also means that the cost of the books are less.  The new books can be found below (I have just bought them both)

- [SharePoint 2013 Development Machine](http://www.amazon.co.uk/SharePoint-2013-Development-Machine-ebook/dp/B009Y4QZT8/ref=sr_1_11?s=digital-text&ie=UTF8&qid=1362433600&sr=1-11) - Sahil Malik
- [SharePoint 2013 - Planet of the Apps](http://www.amazon.co.uk/SharePoint-2013-Planet-Apps-ebook/dp/B009NOIGSM/ref=sr_1_13?s=digital-text&ie=UTF8&qid=1362433600&sr=1-13) - Sahil Malik


