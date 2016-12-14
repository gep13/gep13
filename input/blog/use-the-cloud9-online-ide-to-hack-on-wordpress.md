---
Title: Use the Cloud9 online IDE to hack on WordPress
Published: 31/1/2012
Tags:
- Cloud9
- Online IDE
- WordPress
---

As some of you may know, I have been _hacking_ on this WordPress blog site recently.  The decision to "improve" this site has really come from the realisation that WordPress is actually very good at what it does, and I am going to [continue using it for the foreseeable future](http://www.gep13.co.uk/blog/continue-using-wordpress-or-not/).  With that in mind, there were a few things that were annoying me about the site, so I started digging around the innards of WordPress to figure out what could be changed, and more importantly, how to do it.  To start with, this was done using the always useful FTP application, [FileZilla](http://filezilla-project.org/).  I would download a .php file locally, make some changes to it, and then upload it again.  This cycle repeated for a few iterations, until I realised that there _must_ be a better way to do this!

# Using the WordPress Editor

Now, WordPress comes with its own built-in file editor, which gives you the ability to edit individual files.  This can be pretty much any file within WordPress, be it, plugins, themes, script files, etc.  However, the editor itself is very basic, and I quickly became annoyed at using it:

[![WordPress_Editor](http://www.gep13.co.uk/blog/wp-content/uploads/2012/01/WordPress_Editor_thumb.png)](http://www.gep13.co.uk/blog/wp-content/uploads/2012/01/WordPress_Editor.png)

# Using an Online IDE

Then I remembered about a conversation had with Phil Leggetter ([@leggetter](https://twitter.com/#!/leggetter)) and Daniel Elliot ([@agileguy](https://twitter.com/#!/agileguy)) while I was at [GiveCamp UK](http://www.gep13.co.uk/blog/my-impressions-of-givecampuk/) last year, and the idea of using an online IDE to do the work started to become more appealing.  This would mean that I could "hack" on the files directly from within the browser, but still get the added benefits, such as syntax highlighting.  A quick search, and it turns out that there are lots of online IDE's out there.  Here are some of the ones that I tried out:

- [coderun](http://coderun.com/ide/)
- [ShiftEdit](http://shiftedit.net/)
- [codeanywhere](https://codeanywhere.net/)
- [Cloud9 IDE](http://c9.io/)

The requirements for what I wanted were quite simple:

1. Be free (yes, I am a cheap skate, but for now, what I need to use it for doesn't warrant paying for the service)
1. Allow editing of files on a FTP Server
1. Syntax Highlighting
1. Allow private projects

Due to requirement 1 [coderun](http://coderun.com/ide/) was not able to be used.  Don't get me wrong, this is a GREAT application, and if I was looking to code full-blown ASP.Net applications in the cloud, this would definitely be one of the go to applications.  That left three applications to whittle down.

Although it claims to be able to do it, I couldn't get [codeanywhere](https://codeanywhere.net/) to connect to my FTP Server (and this wasn't for want of trying) so I gave up on using that.  That left [ShiftEdit](http://shiftedit.net/) and [Cloud9 IDE](http://c9.io/).

I played with both of these, on and off, while I was doing my hacking, and I have to say that they are both very good.  Both are free (depending on what you want to do with them), and I found it hard to choose between them.  After a good bit of consideration, I have decided to continue using [Cloud9 IDE](http://c9.io/).  This was for a couple of reasons:

1. Although [ShiftEdit](http://shiftedit.net/) is free (for what I wanted to do) it didn't offer SSL access, which was a bit of a downer
1. [Cloud9 IDE](http://c9.io/) seems to be under far more active development, with exciting recent announcements about [Azure integration](http://cloud9ide.posterous.com/windows-azure-on-cloud9)

One thing I should note about [Cloud9 IDE](http://c9.io/), is that in order to secure access to your projects you normally need to purchase the premium subscription, i.e:

[![Create_New_Project](http://www.gep13.co.uk/blog/wp-content/uploads/2012/01/Create_New_Project_thumb.png)](http://www.gep13.co.uk/blog/wp-content/uploads/2012/01/Create_New_Project.png)

However, when it comes to FTP projects, it is only you that gets access:

[![Create_New_Project_-_FTP](http://www.gep13.co.uk/blog/wp-content/uploads/2012/01/Create_New_Project_-_FTP_thumb.png)](http://www.gep13.co.uk/blog/wp-content/uploads/2012/01/Create_New_Project_-_FTP.png)

Now, I have to admit that other people getting access to my FTP Server was something that I was worried about, and I wanted to test to make sure that it wasn't publicly accessible.  To test this I sent a DM on Twitter to Phil Leggetter and asked him to try to get in, and this is what he was met with:

[![denied access](http://www.gep13.co.uk/blog/wp-content/uploads/2012/01/denied-access_thumb.png)](http://www.gep13.co.uk/blog/wp-content/uploads/2012/01/denied-access.png)

However, what is interesting, is that you "can" grant access to users through the [Cloud9 IDE](http://c9.io/) dashboard, once they request access, which is a really nice touch:

[![Cloud9_Dashboard](http://www.gep13.co.uk/blog/wp-content/uploads/2012/01/Cloud9_Dashboard_thumb.png)](http://www.gep13.co.uk/blog/wp-content/uploads/2012/01/Cloud9_Dashboard.png)

Sorry Phil, I denied your request to join the project :).

All in all, this is a VERY polished application, and I would highly recommend checking it out.  The GitHub and BitBucket integration is seamless, and _just_ works!  Make sure you check it out.

If you are interested in checking out the result of my _hacking _I have uploaded my changes to my GitHub site [here](https://github.com/gep13/NowReadingReloaded13).
