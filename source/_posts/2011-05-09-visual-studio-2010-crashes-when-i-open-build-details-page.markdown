---
author: gep13
comments: true
date: 2011-05-09 06:17:55+00:00
layout: post
slug: visual-studio-2010-crashes-when-i-open-build-details-page
title: Visual Studio 2010 crashes when I open build details page
wordpress_id: 217
categories:
- Visual Studio 2010
tags:
- build
- crash
- Team Foundation Server 2008
- Visual Studio 2010
---

For that last few weeks I have noticed that every time I try to open a build details screen from my Team Foundation Server within Visual Studio 2010 I was greeted with this:

 

[![image](http://www.gep13.co.uk/blog/wp-content/uploads/2011/05/image_thumb.png)](http://www.gep13.co.uk/blog/wp-content/uploads/2011/05/image.png)

 

_NOTE: By build details screen I mean the TFS build details screen which you can get to via Team Explorer | Builds | View Builds and then double click on an available completed build_

 

The details of the event didn’t really provide much insight into what might be going on:

 

[![image](http://www.gep13.co.uk/blog/wp-content/uploads/2011/05/image_thumb1.png)](http://www.gep13.co.uk/blog/wp-content/uploads/2011/05/image1.png)

    [![image](http://www.gep13.co.uk/blog/wp-content/uploads/2011/05/image_thumb2.png)](http://www.gep13.co.uk/blog/wp-content/uploads/2011/05/image2.png)  

 

But due to the fact that I am in the process of transitioning the code base from Visual Studio 2008 to Visual Studio 2010 there really wasn’t much of a push to get this working, as I could simply jump back to my 2008 VM and check what I needed.

 

The other day though I found myself with a couple minutes, so I thought that I would look into getting the problem fixed. A quick Bing turned up the following:

 

[http://connect.microsoft.com/VisualStudio/Downloads/DownloadDetails.aspx?DownloadID=34824](http://connect.microsoft.com/VisualStudio/Downloads/DownloadDetails.aspx?DownloadID=34824)

 

The description of the error:

 

<blockquote>  
> 
> Visual Studio 2010 SP1 crashes or shows the following error when attempting to view a build report on a TFS 2008 server:
> 
>    
> 
> "TF50316: The following name is not valid. Verify that the name does not exceed the maximum character limit, only contains valid characters, and is not a reserved name"
> 
> </blockquote>

 

Seemed to fit my problem exactly. I had installed Service Pack 1 for Visual Studio 2010 recently, and I don’t recall the build details screen working since then, and we are still using TFS 2008, so I thought I would give it a try, nothing to lose.

 

Thankfully, once this fix was installed, the build details page started working again.
