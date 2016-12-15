---
Title: 'Can’t access #Office365 from Office Hub on #WP7'
Published: 20/8/2011
Tags:
- Office Hub
- SharePoint Online
- Windows Phone 7
---

As some of you may know, I have been using the [Office365](http://www.gep13.co.uk/blog/configure-dns-settings-for-office-365) for some time now. I use it both for my personal email accounts, as well as the email accounts for the [Aberdeen Developers .Net User Group](http://www.aberdeendevelopers.co.uk/). Personally, I think it is a great product, however, I have recently found out something rather _**annoying**_ (that was the polite version of the word I wanted to use).

As advertised here:

[http://www.microsoft.com/en-us/office365/plans/small-business/office-web-apps.aspx#fbid=0-IIc1QYd7Q](http://www.microsoft.com/en-us/office365/plans/small-business/office-web-apps.aspx#fbid=0-IIc1QYd7Q)

one of the biggest selling points is the integration with mobile devices such as Windows Phone 7. Notice in the above link that I should be able to:


> Access and view files in high fidelity from your mobile device. 

Now, during the Office365 Beta, it was well understood that this functionality wasn’t available, however, when Office365 rolled out, it was going to be available to both the Professional and Small Business Plans for Office365.

_NOTE: I am currently using the Small Business Plan_

Now that the Beta is finished, and everything has settled down, I set about trying to get access to my SharePoint Team Site using the Office Hub on my Windows Phone 7, but I was disheartened to find out that it didn’t work.

Every time I try, I get the error message:

> SharePoint doesn’t support non-SharePoint servers and can’t open the requested content. You can try opening the content in your browser instead.

I have spoken to a couple people I know who also have a Windows Phone 7 handset and who use Office365, and they have told me that they can get this to work without any problems.

To start with, I thought that there must be something wrong with my setup, however, after doing some digging, it turns out that the problem is the plan that I am on! Namely, the P1 Small Business Plan.

At the minute, Windows Phone 7 Office Hub only supports access to SharePoint online via an HTTPS connection, and unfortunately, this is not offered in the P1 Small Business Plan. I can access the site through Internet Explorer Mobile, however, this doesn’t offer the high fidelity access to files that was promised above!!

A bit more digging turned up this:

[http://community.office365.com/en-us/w/sharepoint/527.aspx](http://community.office365.com/en-us/w/sharepoint/527.aspx)

In my opinion, Microsoft have got the messaging very wrong here, and they need to do something to correct it, _**fast**_!!

I think both the Windows Phone 7 device and Office365 are great products, and I am willing to wait until Mango ships so that I can get them to work together, but I can understand how newcomers to either platform will be very disappointed to find out that what it promised isn’t actually possible yet!
