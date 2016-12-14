---
author: gep13
comments: true
date: 2013-01-15 09:00:56+00:00
layout: post
slug: update-to-interesting-windows-phone-build-error
title: Update to interesting Windows Phone Build Error
wordpress_id: 1864
categories:
- Windows Phone
tags:
- Build Error
- Windows Phone 7
- Windows Phone 8
- WMAppManifest.xml
---

# Windows Phone 8 handling of WPAppmanifest.xml has changed in Visual Studio 2012


Last year, I [blogged about an interesting build error](http://gep13.me/VoDIGy) that I had noticed in a Windows Phone 7 application that I was creating.  This error circled around a problem that occurred when you had a very long name in the author property within the WMAppManifest.xml file.  The error that was reported in the Error Window was fairly cryptic:


<blockquote>“Manifest validation failed: AppManifestInvalidAuthor”</blockquote>


But after a bit of googling, I was able to find out what the problem was.  In all honesty, it was a very rare error, and it came down to a naming convention that I was using for a set of sample applications that I was creating, however, it was still slightly annoying!


# Things are better in Visual Studio 2012


I am happy to report, that things have improved, a lot, in this area within Visual Studio 2012.  Firstly, you don't have to edit the WMAppManifest.xml file by hand.  Visual Studio 2012 now includes a designer that sits on top of this XML file, as shown here:

[gallery type="rectangular" ids="1867,1868,1869,1870"]

This editor exists for both Windows Phone 7.1 and Windows Phone 8.0 applications.  You can of course continue to edit the XML directly (if you are that way inclined):

[caption id="attachment_1871" align="alignnone" width="1142"][![Edit WMAppManifest.xml directly](http://www.gep13.co.uk/blog/wp-content/uploads/2013/01/edit_WMAppManifest_File_Directly.png)](http://www.gep13.co.uk/blog/wp-content/uploads/2013/01/edit_WMAppManifest_File_Directly.png) Edit WMAppManifest.xml directly[/caption]

But doing so means that you lose the ability to get immediate feedback on the state of your WMAppManifest.xml file, as shown here:

[caption id="attachment_1872" align="alignnone" width="904"][![WMAppManifest Editor showing error](http://www.gep13.co.uk/blog/wp-content/uploads/2013/01/WMAppManifest_Editor_Error.png)](http://www.gep13.co.uk/blog/wp-content/uploads/2013/01/WMAppManifest_Editor_Error.png) WMAppManifest Editor showing error[/caption]

This is a really great addition to Visual Studio, and another example of how Microsoft are ensuring that the end to end development experience is getting much better.  I first noticed this type of editor on top of XML files in Visual Studio 2010 when doing SharePoint development, and this is another very welcome addition!
