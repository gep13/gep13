---
Title: How to install chocolatey nuget
Published: 4/1/2013
Tags:
- chocolatey
- installation
- package manager
- series
RedirectFrom: blog/how-to-install-chocolatey-nuget/index.html
---

# Time to get chocolatey...

If you are not already familiar with [chocolatey nuget](http://chocolatey.org/), let me give you a brief introduction.

>Chocolatey NuGet is a Machine Package Manager, somewhat like apt-get, but built with Windows in mind."

What does this mean?  It means that once you have chocolatey nuget installed, you can easily install applications (packages), that are stored in the chocolatey gallery, with a single command.  What's more, if these packages are ever updated, you can update them on your machine using, again, a single command.

If you want to find out more information about chocolatey nuget you can browse the available packages [here](http://chocolatey.org/packages), read the documentation [here](https://github.com/chocolatey/chocolatey/wiki), and ask questions on the forum [here](https://groups.google.com/forum/?fromgroups#!forum/chocolatey).


# Installation Steps

**NOTE: **The following installation steps and screenshots were taken from a virtual machine   with Windows Server 2008 R2 Service Pack 1, running in Hyper-V on a Windows 8 Host Machine.

1. Open a Command Prompt as Administrator
1. Hit the Start button
1. Type "cmd"
1. Right click on the "cmd" icon
1. Click "Run as administrator"
1. Enter the following command (you can simply copy/paste this command) and then press the "Enter" key:

>@powershell -NoProfile -ExecutionPolicy unrestricted -Command "iex ((new-object net.webclient).DownloadString('http://chocolatey.org/install.ps1'))" && SET PATH=%PATH%;%systemdrive%\chocolatey\bin

1. The installation of chocolatey will begin
1. The installation will complete

You can see screenshots of each of these steps in the gallery at the bottom of this blog post.

# What has the installation done

Once the installation is complete you will notice a few immediate changes on your computer.

1. Chocolatey will have added a number of folders/files to the root of your c:\ drive.
1. Chocolatey will have added some environment variables to allow the commands that is provides work

# Post Installation Checks

To verify that verify is working correctly:

1. Open PowerShell as an Administrator (not strictly required, but a good habit to get into)
1. Hit the Start button
1. Type "PowerShell"
1. Right click on the "Windows PowerShell" icon
1. Click "Run as administrator"
1. Type "chocolatey help"
1. If everything is working correctly, you should get some output confirming the version of chocolatey nuget installed, as well as some information about it.

# Installation Screenshots

<div id="flickrembed"></div><small style="display: block; text-align: center; margin: 0 auto;">Powered by <a href="https://flickrembed.com">flickr embed</a>.</small>

<script src="https://flickrembed.com/embed_v2.js.php?source=flickr&layout=responsive&input=72157676537512420&sort=0&by=album&theme=default&scale=fit&skin=default&id=5850544461b40"></script>
