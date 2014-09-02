---
author: gep13
comments: true
date: 2011-05-15 11:36:00+00:00
layout: post
slug: configure-dns-settings-for-office-365
title: Configure DNS Settings for Office 365
wordpress_id: 260
categories:
- Office 365
tags:
- DNS
- Lync
- Office 365
- SharePoint
- SRV
---

For the last few weeks I have been trying to sort of my installation of the [Office 365 Beta](http://www.microsoft.com/en-us/office365/online-software.aspx). I am not a business, but the Beta is open to individuals as well as corporate people. There are several reasons that I wanted to play with it:

 

  
  * Sheer curiosity. I heard a lot about it while I was at the [BPCUK conference](http://www.sharepointbestpractices.co.uk/)
   
  * Wanted to try out the full integration experience with Windows Phone 7
   
  * Try out some sandboxed SharePoint solutions
   
  * Set up a meeting place for the administrators of the [Aberdeen Developers .Net User Group](http://www.aberdeendevelopers.co.uk/)
 

When you get your invite to the Beta you will be asked to hand over a domain to Office 365 to take over the administration of. The majority of the time, that shouldn’t really be a problem as the domain that you are likely to want to host on Office 365 will be a dedicated one for that purpose, however, if like me you use the domain for other stuff, or you administer your own DNS settings, you won’t want to hand over the domain to their control.

 

Although not mentioned when you first log into the Office 365 setup page, you are able to configure the DNS settings yourself, the end result is that the domain entries simply point to Office 365, rather than being under their direct control.

 

Now, before we go too much further, let me state that I actually know very little about setting up DNS entries, and it was only through the help of [@ianmoran](http://twitter.com/#!/ianmoran) that I was actually able to get mine working.

 

_NOTE: Ian has a post _[_here_](http://www.konnexion.com/?p=177)_ that I used as an aid to get up and running_

 

_**Required DNS Records**_

 

In order to know the DNS settings that you need to configure you have to log into the administration section of Office 365. Once in there, click on Admin. From there, click on Domains in the left hand menu, then click on the domain that you want to administer. Once there, click on DNS Manager, and you will see something like the following:

 

[![image](http://www.gep13.co.uk/blog/wp-content/uploads/2011/05/image_thumb4.png)](http://www.gep13.co.uk/blog/wp-content/uploads/2011/05/image4.png)

 

These are all the records that you will need to configure on your domain. The first set are used for the Exchange Email and the second set are used of setting up [Lync 2010](http://blogs.msdn.com/b/mssmallbiz/archive/2010/11/16/microsoft-lync-2010-information-and-resources-for-you.aspx).

 

If like me, you will be able to set up the majority of these records without too much trouble. It is just a case of logging into your hosting provider and adding the records. I did this without any problems through [Blacknight’s](http://www.blacknight.com/) control panel for the MX, CNAME and TXT records.

 

However, when it came to the SRV records, I was stumped. I had never heard of [SRV](http://en.wikipedia.org/wiki/SRV_record) (Service Record) before, and through the Blacknight control panel it appeared that I was only able to create the _tcp protocol record, there was no option to create a _tls protocol record. A quick email to the support team confirmed this, but I was told that they would be able to create the record on my behalf, phew!

 

With all the records created, I set about testing it. The Exchange email started working straight away, both through Outlook on the desktop, Webmail on the Internet, and through Outlook on my Windows Phone 7. Success!!

 

However, when it came to Lync 2010, I just couldn’t get it to work!

 

**_Manual Lync 2010 Configuration_**

 

With the help of Ian, I was able to set up Lync 2010 manually, to prove that it worked at all. This was done by going into Lync and selecting Tools | Options, and from there click “Advanced…” 

 

[![image](http://www.gep13.co.uk/blog/wp-content/uploads/2011/05/image_thumb5.png)](http://www.gep13.co.uk/blog/wp-content/uploads/2011/05/image5.png)

 

Then, in the Advanced Connection Settings dialogue, manually configure the internal and external server names to be sipdir.online.lync.com:443:

 

[![image](http://www.gep13.co.uk/blog/wp-content/uploads/2011/05/image_thumb6.png)](http://www.gep13.co.uk/blog/wp-content/uploads/2011/05/image6.png)

 

And this will allow you to log into Lync using your user that you set up in Office 365.

 

**_Testing SRV Records_**

 

Although manually settings the records was “fine” I wanted to figure out what was wrong with my set up. In order to do that, I had to figure out what the records were set up as. The feedback that I was getting from Blacknight was that everything was fine on their end, but I had no way of verifying that. I had a report that they were using [dig](http://linux.die.net/man/1/dig) to confirm the records, however, I don’t have a linux server to use that command, and even though I installed the Windows version of [dig](http://members.shaw.ca/nicholas.fong/dig/), I just couldn’t get it to work.

 

I fell back on trying to use nslookup to get the information that I needed, and I was finally able to figure out how to do this.

 

  
  1. Start | run
   
  2. Type cmd then press enter
   
  3. Type nslookup and then press enter
   
  4. Type set type=srv and then press enter
   
  5. Type _sip._tls.<your domain name here> and press enter
   
  6. You will then get the record back
   
  7. Type _sipfederationtls._tcp.<your domain name here> and press enter
   
  8. You will then get your record back
 

The output should look something like this:

 

[![SRV Records](http://www.gep13.co.uk/blog/wp-content/uploads/2011/05/SRV-Records_thumb.png)](http://www.gep13.co.uk/blog/wp-content/uploads/2011/05/SRV-Records.png)

 

_NOTE: There records are the ones that are misconfigured_

 

Now, when I looked at this, I thought everything looked ok, when compared to the above screen shot for the DNS Manager settings within Office 365. However, when I showed this to Ian, who must have a keener eye than me, he told me that the _tls entry was incorrect. Notice how the svr hostname is appended with .aberdeendevelopers.co.uk? That is incorrect. Turns out that the SRV record which had been entered by Blacknight was missing a trailing period, which meant that the domain name was getting appended. I didn’t realise setting up DNS entries was this complicated!!

 

Another quick email to Blacknight support cleared up this problem, and I was then able to connect to Lync 2010, win!
