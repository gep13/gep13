---
Title: A tool to synchronise Visual Studio 2010 Extensions
Published: 27/3/2011
Tags:
- Extensions
- Live Mesh
- Visual Studio 2010
---

A while back on Twitter I was having a conversation with Paul Stack (@stack72), in which Paul suggested that there was a fundamental ability missing from the Visual Studio 2010 Extension Manager. Namely, the ability to synchronise Extensions across multiple Visual Studio 2010 instances. The upshot of this conversation was a blog post from Paul which you can see [here](http://paulstack.co.uk/blog/post/Visual-Studio-2010-Extension-Required.aspx).

Moving forward a month, I got another Tweet from Paul saying that he has solved this problem with the help of Latish Sehgal (@Latish) and his ExtensionSync Visual Studio 2010 Extension. You can find Paul’s blog post about this [here](http://paulstack.co.uk/blog/post/Finally-a-Visual-Studio-Extension-Sync-Tool.aspx), and more information on Latish’s blog [here](http://dotnetsurfers.com/blog/2011/03/14/extensionsync-a-visual-studio-extension-to-synchronize-other-extensions/).

As soon as I heard about this, I immediately set about getting this installed, and tested between Visual Studio 2010 on my work machine, and Visual Studio 2010 on my home machine. I am happy to say that “it just worked!”

The only difference in my setup, compared to the example in Latish’s video, I am using Live Mesh to do the sync’ing, rather than DropBox. However, as long as you can get the settings file “shared” between the two machines, there is no reason why you can’t get this working, even if that means emailing the file to your other machine.

With all that set up and running, I thought my work was done. However, after another conversation with Paul, again via the medium of Twitter (I think I might be addicted to that now), I realised that I had missed a trick!!

This extension, not only provided me with the ability to synchronise my own extensions, but it also provided the ability to synchronise the extensions that are used within a team of developers. At the minute, I am in the process of upgrading a Visual Studio 2008 solution into Visual Studio 2010, and once that is complete, I will be rolling out a base Visual Studio 2010 Virtual Machine for all the developers to use. Out of the box, I can make sure that each Virtual Machine has the same extensions, but what if new ones come out that each developer should have?

Sure, I could send out an email to everyone to say, “_get this extension installed_”, but it would just be plain simpler if that happened automatically. That way, I can ensure a consistent development environment across all the development machines.

So, with this in mind, I set up a mapped drive on a common server that each Virtual Machine will be able to hit, and I configured ExtensionSync to use this mapped drive, and again “it just worked!”.

A big thanks to Latish for creating this Extension, and to Paul for the ideas!!
