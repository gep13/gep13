---
author: gep13
layout: post
keywords: "Silverlight, Windows Phone, SignTool, "
description: Strange error when using SignTool to sign XAP file ready for deployment
comments: true
sharing: true
categories: 
  - MustRemember
tags: 
  - Windows Phone
  - Silverlight
  - SignTool
published: true
title: Strange Error When Signing XAP File for Windows Phone 8.1. Silverlight Application
date: 2016-01-29T14:28:13.000Z
slug: "strange-error-when-signing-xap-file-for-windows-phone-8.1-silverlight-application"
---

## SignTool Error: This file format cannot be signed because it is not recognized.

For the best part of the last two days, I have been staring at various incarnations of error messages from the SignTool executable, most notably the one above.  What follows are some notes on what I was doing, and why, in the hope that if I run into this again, I will have a chance at remembering what to do.

## TL/DR

If you are seeing this error, check what version of Silverlight you have installed on your machine.  If you have this:

![Silverlight Version 5.1.20513.0]({{site.baseurl}}/source/assets/posts/SilverlightVersionOne.png)

i.e. Silverlight version 5.1.20513.0, then this could very well be causing your issue.  Install the latest version, at the time of writing this was 5.1.41212.0, and try signing the XAP file again.  This worked for me, but I have no idea why.  Huge shout out to [potricos](http://stackoverflow.com/users/4550683/potricos) on this [StackOverflow](http://stackoverflow.com/a/28433317/671491) post where this suggestion was mentioned.  I honestly didn't see how this would ever solve the problem, but I thought I would give it a try, and I am glad I did!

<!--more-->

## So, what was I doing?

I have been working on a Windows Phone 8.1 Silverlight application, and development and deployment had been working without any problems whatsoever.  As these things have a tendency to do, the development work stopped on the project, waiting for testing with the client.  Some time passed, and eventually the application was tested, and as a result of that testing, some minor issues were identified.

So, I cracked open Visual Studio, made the necessary changes, checked in the code, updated the release notes, tagged the repository. generated the XAP file, and handed this over for testing.

Job done I hear you say?

Well, no!

When we tried to deploy the XAP file onto the Windows Phone (using an Enterprise Certificate) it simply wouldn't install.  There were no errors, no exceptions, no dialogues, no nothing.  When we went back and re-installed the old version of the application is worked fine.  So this told me that the Enterprise Certificate was good, and I wasn't running into any issues with certificate expiration.  So what did that leave?

What followed over the next two days were various trial/error approaches to get to the root cause.

- Found another machine from colleague where the generation of the XAP file did result in a successful deployment
- Created a Virtual Machine to try to mimic the functionality on the colleague machine
- Breaking apart the build process trying to isolate what could be causing problems
- Extracting the XAP files and doing comparisons between the working and non working versions to try to identify differences
- Lots and lots of googling
- Lots and lots of head scratching

Eventually, after digging around in various log files, we stumbled across this error message:

> Done Adding Additional Store
Number of files successfully Signed: 0
Number of warnings: 0
Number of errors: 1

Which was found when the build script was executing the MDILXAPCompile step that is described [here](https://msdn.microsoft.com/en-us/library/windows/apps/dn168929(v=vs.105).aspx).

After extracting the actual command that was being run by the tool at this point in time, and directly running it, we got some more information returned which wasn't captured in the log:

![Verbose Output from SignTool]({{site.baseurl}}/source/assets/posts/SignToolOutput.png)

Once this was discovered, and some more hunting around, we were led to this [StackOverflow](http://stackoverflow.com/a/28433317/671491) post, which was initially disregarded as not being relevant.  However, on checking, the laptop on which the build/deployment was working had a later version of Silverlight compared to the machines that it wasn't working on.

After installing the latest version, which took the Silverlight version to 5.1.41212.0:

![Silverlight Version 5.1.41212.0]({{site.baseurl}}/source/assets/posts/SilverlightVersionTwo.png)

The build/deployment then proceeded to work!

I still am no wiser on "why" this is now working, but I am happy that it is.  I could understand there being a difference if I had updated the Silverlight SDK, but seeing a difference after installing the Silverlight Runtime, doesn't really make any sense to me.

If anyone can shed any light on what is going on here, I would love to hear from you.