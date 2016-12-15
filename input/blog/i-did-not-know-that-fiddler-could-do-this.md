---
Title: I did not know that Fiddler could do this...
Published: 7/7/2011
Tags:
- Features
- Fiddler
- HTTP
- Process
---

One of the most essential tools for working on web development is Fiddler:

[http://www.fiddler2.com/fiddler2/](http://www.fiddler2.com/fiddler2/)

For those who don’t know:
 
> Fiddler is a Web Debugging Proxy which logs all HTTP(S) traffic between your computer and the Internet. Fiddler allows you to inspect all HTTP(S) traffic, set breakpoints, and "fiddle" with incoming or outgoing data. Fiddler includes a powerful event-based scripting subsystem, and can be extended using any .NET language.

This tool has helped me out in a number of situations, and it is actually one of the first things that I [install on my machine](http://www.gep13.co.uk/blog/comprehensive-list-of-applicationsconfigurations-for-new-pc) if I ever need to rebuild it.

The other day when using Fiddler I was blown away by a feature that I had not seen before. Namely, the ability to filter HTTP traffic coming from a single process. The concept is by no means a new one, but it is the way in which Fiddler does it that I thought was very clever.

**_The Steps_**

1. Open your web browser ready for inspecting traffic
1. Open Fiddler
1. Find the “Process Filter” toolbar item in the main toolbar       
       
[![image](http://www.gep13.co.uk/blog/wp-content/uploads/2011/07/image_thumb.png)](http://www.gep13.co.uk/blog/wp-content/uploads/2011/07/image.png)        

1. Hover your mouse hover this and you will see the following tooltip which pretty much explains it all. Click your mouse on the “Process Filter” button and the text will change to say “pick target...” and the icon will change to be a cross hair.       
       
[![image](http://www.gep13.co.uk/blog/wp-content/uploads/2011/07/image_thumb1.png)](http://www.gep13.co.uk/blog/wp-content/uploads/2011/07/image1.png)        

1. With the left mouse button still held down, move the mouse to the window (process) that you want to filter the HTTP target from. In this case, it is the web browser that you opened in step 1, but it could equally be any other application that is communicating over HTTP. 
1. The “Process Filter” button will change again to show the process id that it is filtering HTTP traffic from       
       
[![image](http://www.gep13.co.uk/blog/wp-content/uploads/2011/07/image_thumb2.png)](http://www.gep13.co.uk/blog/wp-content/uploads/2011/07/image2.png)   

1. Once you are finished, simply left click the “Process Filter” toolbar item again and the filter will be removed.

In my case, if I open Fiddler on my non development machine I have HTTP traffic coming from Windows Live Mesh, Outlook, OneNote, BookMark synchronisation, etc. Trying to figure out what is going on with one “thing” can be difficult, this filtering ability makes it very easy, and as I mentioned I think the way in which you select the process to filter on is VERY clever.
