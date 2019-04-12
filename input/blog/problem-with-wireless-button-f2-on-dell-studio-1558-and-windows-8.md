---
Title: Problem with Wireless Button (F2) on Dell Studio 1558 and Windows 8
Published: 4/2/2013
Tags:
- dell studio 1558
- f2
- windows 8
- wireless
---

# How I finally got the Wireless Button (F2) on my Dell Studio 1558 working...

After a very annoying couple of days with no wireless connection on my laptop, I was finally able to get it working.  Hopefully this will help anyone else who falls into the same problem.

# The Problem

After doing a fresh install of Windows 8 on my Dell Studio 1558, I thought that everything was working perfectly.  Since the original install, I had no issues whatsoever.  However, the other day, I accidentally pressed the F2 key (this is the hardware button which will enable/disable the wireless radio).  I wasn't too concerned when this happened, as I thought that I could just press it again, and it would re-enable the radio, but...

...this didn't happen!  I was stuck with no wireless connection.

I tried everything that I could think of to fix the problem, and I couldn't get anything to work.  Everything seemed to be correct, but I still couldn't get a wireless connection.  What I was left with was this:

![Broken Wireless Connection 1](https://gep13wpstorage.blob.core.windows.net/gep13/2013/2/4/Settings_Bar_-_Unavailable.png)
![Broken Wireless Connection 2](https://gep13wpstorage.blob.core.windows.net/gep13/2013/2/4/System_Tray_Icon.png)
![Broken Wireless Connection 3](https://gep13wpstorage.blob.core.windows.net/gep13/2013/2/4/Wifi_Off.png)

# The Solution

After googling everything that I could think of, I eventually, out of sheer desperation, decided to try using the "Diagnose" wizard, that you can find when right clicking on the network connection in control panel:

![Diagnose Context Menu](https://gep13wpstorage.blob.core.windows.net/gep13/2013/2/4/Diagnose_Context_Menu.png)

This started a wizard which correctly identified that the Wireless Radio was indeed disabled  and to my surprise, provided an option to re-enable it.  I am happy to report that I now have a functioning wireless connection.  In addition, [one of the sites](http://en.community.dell.com/support-forums/laptop/w/laptop/4232.studio-1558-windows-8-64-bit.aspx) that I did stumble across, contained a complete list of Windows 8 compatible drivers for the Dell Studio 1558.  It would seem that Dell are not creating/maintaining Windows 8 compatible drivers, so the above site is the only unofficial list of compatible drivers for Windows 8.  I updated to the latest Intel Wireless Driver, and it is all now working!
