---
Title: How to install MySQL Workbench
Published: 4/1/2013
Tags:
- chocolatey
- database
- mysql
- series
- workbench
RedirectFrom: blog/how-to-install-mysql-workbench/index.html
---

# What is MySQL Workbench

> MySQL Workbench provides DBAs and developers an integrated tools environment for:
> - Database Design & Modeling
> - SQL Development (replacing MySQL Query Browser)
> - Database Administration (replacing MySQL Administrator)

If you want to find out more information about MySQL Workbench, you can find it [here](http://www.mysql.com/downloads/workbench/).

# Installation Steps

**NOTE: **The following installation steps and screenshots were taken from a virtual machine   with Windows Server 2008 R2 Service Pack 1, running in Hyper-V on a Windows 8 Host Machine.

1. [Install chocolatey nuget](http://gep13.me/S8ZnDT)
1. Open PowerShell as an Administrator
1. Hit the Start button
1. Type `PowerShell`
1. Right click on the "Windows PowerShell" icon
1. Click "Run as administrator"
1. Type `choco install vcredist2010` and press the enter key
1. The installation of the Visual C++ 2010 Redistributable will begin
1. The installation will complete
1. Type `choco install mysql.workbench`
1. The installation of MySQL Workbench will begin
1. The installation will complete

You can see screenshots of each of these steps in the galley at the bottom of this blog post.

# Post Installation Checks

There should be a new application installed on your computer, trying opening it to make sure that everything worked correctly.

1. Hit the Start button
1. Type "workbench"
1. Click on the "MySQL Workbench" icon
1. MySQL Workbench should open

# Installation Screenshots

<div id="flickrembed"></div><small style="display: block; text-align: center; margin: 0 auto;">Powered by <a href="https://flickrembed.com">flickr embed</a>.</small>

<script src="https://flickrembed.com/embed_v2.js.php?source=flickr&layout=responsive&input=72157677826588906&sort=0&by=album&theme=default&scale=fit&skin=default&id=5850544461b40"></script>
