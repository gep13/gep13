---
author: gep13
comments: true
date: 2011-07-07 11:59:09+00:00
layout: post
slug: i-did-not-know-that-fiddler-could-do-this
title: 'I did not know that #Fiddler could do this…'
wordpress_id: 302
categories:
- General Development
tags:
- Features
- Fiddler
- HTTP
- Process
---

One of the most essential tools for working on web development is Fiddler:

 

[http://www.fiddler2.com/fiddler2/](http://www.fiddler2.com/fiddler2/)

 

For those who don’t know:

 

<blockquote>  
> 
>    
> 
> Fiddler is a Web Debugging Proxy which logs all HTTP(S) traffic between your computer and the Internet. Fiddler allows you to inspect all HTTP(S) traffic, set breakpoints, and "fiddle" with incoming or outgoing data. Fiddler includes a powerful event-based scripting subsystem, and can be extended using any .NET language.
> 
>    
> 
> </blockquote>

 

This tool has helped me out in a number of situations, and it is actually one of the first things that I [install on my machine](http://www.gep13.co.uk/blog/?p=198) if I ever need to rebuild it.

 

The other day when using Fiddler I was blown away by a feature that I had not seen before. Namely, the ability to filter HTTP traffic coming from a single process. The concept is by no means a new one, but it is the way in which Fiddler does it that I thought was very clever.

 

**_The Steps_**

 

  
  1. Open your web browser ready for inspecting traffic
   
  2. Open Fiddler
   
  3. Find the “Process Filter” toolbar item in the main toolbar       
       
[![image](http://www.gep13.co.uk/blog/wp-content/uploads/2011/07/image_thumb.png)](http://www.gep13.co.uk/blog/wp-content/uploads/2011/07/image.png)        

   
  4. Hover your mouse hover this and you will see the following tooltip which pretty much explains it all. Click your mouse on the “Process Filter” button and the text will change to say “pick target…” and the icon will change to be a cross hair.       
       
[![image](http://www.gep13.co.uk/blog/wp-content/uploads/2011/07/image_thumb1.png)](http://www.gep13.co.uk/blog/wp-content/uploads/2011/07/image1.png)        

   
  5. With the left mouse button still held down, move the mouse to the window (process) that you want to filter the HTTP target from. In this case, it is the web browser that you opened in step 1, but it could equally be any other application that is communicating over HTTP. 
   
  6. The “Process Filter” button will change again to show the process id that it is filtering HTTP traffic from       
       
[![image](http://www.gep13.co.uk/blog/wp-content/uploads/2011/07/image_thumb2.png)](http://www.gep13.co.uk/blog/wp-content/uploads/2011/07/image2.png)   

   
  7. Once you are finished, simply left click the “Process Filter” toolbar item again and the filter will be removed.
 

In my case, if I open Fiddler on my non development machine I have HTTP traffic coming from Windows Live Mesh, Outlook, OneNote, BookMark synchronisation, etc. Trying to figure out what is going on with one “thing” can be difficult, this filtering ability makes it very easy, and as I mentioned I think the way in which you select the process to filter on is VERY clever.
