---
author: gep13
comments: true
date: 2011-05-13 20:40:00+00:00
layout: post
slug: vmware-workstation-troubles
title: VMWare Workstation troubles…
wordpress_id: 218
categories:
- General PC
tags:
- Virtual Machine
- Virtual PC
- VMWare
---

At work, I use Windows 7 as the base operating system for my Desktop machine. It is a reasonably beefy machine, with an Intel i7 CPU and 8GB of RAM. The idea is that we can host multiple VM’s at the same time for development purposes.

 

In order to host the VM’s, I had both VMWare Workstation 6.5 installed, as well as Microsoft Virtual PC. Why the two virtualisation products I hear you ask? Well, let me tell you…

 

In order to connect to some clients network, we have to use a proprietary VPN Client, and unfortunately, this does not work on Windows 7, only Windows XP. Now, I could have just installed a copy of Windows XP using VMWare Wokstation (which is our default virtualisation product) however, that would have required a retail version of the OS, rather than the MSDN ones that we use for development purposes. As a result, I decided to enable the WIndows XP Mode on my Windows 7 host operating system, which I thought was a particularly sensible solution.

 

However, when I tried to run up Windows XP Mode at the same time as a VM hosted in VMWare Workstation, I was greeted with the following:

 

[![image](http://www.gep13.co.uk/blog/wp-content/uploads/VMWare-Workstation-troubles_11F5D/image_thumb.png)](http://www.gep13.co.uk/blog/wp-content/uploads/VMWare-Workstation-troubles_11F5D/image.png)

 

Followed by this:

 

[![image](http://www.gep13.co.uk/blog/wp-content/uploads/VMWare-Workstation-troubles_11F5D/image_thumb_3.png)](http://www.gep13.co.uk/blog/wp-content/uploads/VMWare-Workstation-troubles_11F5D/image_3.png)

 

This actually crashed the VMWare Workstation hosted VM, and resulted in some corruption of one of me VM’s ![Sad smile](http://www.gep13.co.uk/blog/wp-content/uploads/VMWare-Workstation-troubles_11F5D/wlEmoticon-sadsmile.png)

 

Initially, I resigned myself to only having one virtualisation software running at once, as I couldn’t find an immediate solution to the problem.

 

However, talking to a colleague at work, who does the exact same thing as I was trying to do, said he was able to get it working no problem. Turns out, he was running VMware Workstation 7, not version 6.5.

 

A quick install, and I am happy to say that everything is now working perfectly
