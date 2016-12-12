---
author: gep13
comments: true
date: 2013-01-04 13:40:37+00:00
layout: post
slug: how-to-install-chocolatey-nuget
title: How to install chocolatey nuget
wordpress_id: 1726
categories:
- Chocolatey Series
tags:
- chocolatey
- Installation
- package manager
- Series
---

# Time to get chocolatey...


If you are not already familiar with [chocolatey nuget](http://chocolatey.org/), let me give you a brief introduction.


<blockquote>"Chocolatey NuGet is a Machine Package Manager, somewhat like apt-get, but built with Windows in mind."</blockquote>


What does this mean?  It means that once you have chocolatey nuget installed, you can easily install applications (packages), that are stored in the chocolatey gallery, with a single command.  What's more, if these packages are ever updated, you can update them on your machine using, again, a single command.

If you want to find out more information about chocolatey nuget you can browse the available packages [here](http://chocolatey.org/packages), read the documentation [here](https://github.com/chocolatey/chocolatey/wiki), and ask questions on the forum [here](https://groups.google.com/forum/?fromgroups#!forum/chocolatey).


# Installation Steps


**NOTE: **The following installation steps and screenshots were taken from a virtual machine   with Windows Server 2008 R2 Service Pack 1, running in Hyper-V on a Windows 8 Host Machine.



	
  1. Open a Command Prompt as Administrator

	
    1. Hit the Start button

	
    2. Type "cmd"

	
    3. Right click on the "cmd" icon

	
    4. Click "Run as administrator"




	
  2. Enter the following command (you can simply copy/paste this command) and then press the "Enter" key:


<blockquote>@powershell -NoProfile -ExecutionPolicy unrestricted -Command "iex ((new-object net.webclient).DownloadString('http://chocolatey.org/install.ps1'))" && SET PATH=%PATH%;%systemdrive%\chocolatey\bin</blockquote>




	
  3. The installation of chocolatey will begin

	
  4. The installation will complete


You can see screenshots of each of these steps in the gallery at the bottom of this blog post.


# What has the installation done


Once the installation is complete you will notice a few immediate changes on your computer.



	
  1. Chocolatey will have added a number of folders/files to the root of your c:\ drive.

	
  2. Chocolatey will have added some environment variables to allow the commands that is provides work




# Post Installation Checks


To verify that verify is working correctly:



	
  1. Open PowerShell as an Administrator (not strictly required, but a good habit to get into)

	
    1. Hit the Start button

	
    2. Type "PowerShell"

	
    3. Right click on the "Windows PowerShell" icon

	
    4. Click "Run as administrator"




	
  2. Type "chocolatey help"

	
  3. If everything is working correctly, you should get some output confirming the version of chocolatey nuget installed, as well as some information about it.




# Installation Screenshots


[gallery ids="1727,1728,1729,1730,1732,1731,1737,1734"]
