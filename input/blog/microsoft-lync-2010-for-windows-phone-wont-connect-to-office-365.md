---
Title: Microsoft Lync 2010 for Windows Phone – won’t connect to Office 365
Published: 12/12/2011
Tags:
- DNS
- Lync
- Office 365
- Windows Phone 7
---

[![clip_image002](http://www.gep13.co.uk/blog/wp-content/uploads/2011/12/clip_image002_thumb.jpg)](http://www.gep13.co.uk/blog/wp-content/uploads/2011/12/clip_image002.jpg)

This morning, thanks to the medium of Twitter I found out that the Lync 2010 Client for Windows Phone had been released. A quick search on the Marketplace, and the application was downloading onto my Phone.

I immediately went and typed in the credentials for my Office 365 account expecting that it would just work, however, it came back with an error saying that it was “Unable to Sign In” and that I should check my sign in details, and server etc.

The first thing I checked was that Lync was still connecting fine from my desktop application, and it was. The second thing I tried was to manually type in the server name (or what I thought was the server name) into the necessary places, however, this didn’t work either.

After a bit of googling/binging, I found this:

[http://community.office365.com/en-us/w/lync/1040.aspx](http://community.office365.com/en-us/w/lync/1040.aspx)

Which suggested that I needed to add another CNAME record to my DNS configuration in order for the Windows Phone application to work correctly. However, as per this [blog post](http://www.gep13.co.uk/blog/?p=260) I believed that I had already setup the required DNS Settings. Time to investigate…

**_NOTE: What follows is only required is your are managing your own DNS entries for your Office 365 Domain._**

After logging into my Office 365 account, I selected:

- Home
- Admin
- Management | Domains
- Selected the domain of interest, and then click “Manage DNS”
 
And sure enough, the required DNS Records for Office 365 had changed since I last looked at it:

[![clip_image002[4]](http://www.gep13.co.uk/blog/wp-content/uploads/2011/12/clip_image0024_thumb.jpg)](http://www.gep13.co.uk/blog/wp-content/uploads/2011/12/clip_image0024.jpg)

There is a new CNAME entry for lyncdiscover.gep13.co.uk. And actually, the requirement for the second SRV record has been removed, replaced with another CNAME record.

I then set about making the required changes with my domain registrar, and after the required propagation time, I am happy to report that I am now able to connect my Windows Phone running Lync 2010 to my Office 365 account.

It would be nice to know if there were notifications about the changes to the DNS requirements for Office 365. If anyone knows where I can get these, I would be very interested to hear about it!
