---
Title: How to use AppVeyor Remote Desktop Connection
Published: 23/7/2017
Tags:
- how to
- AppVeyor
- RDP
- Remote Desktop Connection
- Build
---

One of the best things about AppVeyor is that it is a **completely online Continuous Integration Server**.  You as a user don't have to worry about installing the latest version of it, or applying security patches, etc.  You can simply get on with the task at hand.  However, one of the worst things about AppVeyor is that it is a **completely online Continuous Integration Server**.  Those times when the build isn't working, and you have no idea why, it can be difficult to figure it out solely based on the output logs.

That is where AppVeyor's unique ability to get a Remote Desktop Connection to the Build Agent is incredibly powerful!  You get complete administrator access to the VM for 60 minutes (either at the start of the build, or at the end of it), which gives to time to debug and figure out exactly what is going on.

All of this is explained in the AppVeyor [documentation site](https://www.appveyor.com/docs/how-to/rdp-to-build-worker/) but I thought I would create a short video explaining exactly how it works.

<iframe width="853" height="480" src="https://www.youtube.com/embed/5OHsXduezIw" frameborder="0" allowfullscreen></iframe>

# Gotcha

The only gotcha that I ran into while creating this video is that although it isn't mentioned, the password that you create for logging into the server is subject to the standard complexity rules, for example mixed upper and lower case letters, use of numbers and special characters, etc.  If you use a password that doesn't meet with these requirements, you will get a build error similar to this:

![AppVeyor RDP Password Error](https://gep13wpstorage.blob.core.windows.net/gep13/2017/07/23/appveyor_rdp_password_error.png)
