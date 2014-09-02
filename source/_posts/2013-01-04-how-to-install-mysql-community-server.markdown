---
author: gep13
comments: true
date: 2013-01-04 14:00:33+00:00
layout: post
slug: how-to-install-mysql-community-server
title: How to install MySQL Community Server
wordpress_id: 1740
categories:
- Chocolatey Series
tags:
- chocolatey
- database
- mysql
- Series
---

# What is MySQL Community Server?




<blockquote>MySQL Community Edition is the freely downloadable version of the world's most popular open source database. It is available under the GPL license and is supported by a huge and active community of open source developers.</blockquote>


If you want to find out more information about MySQL Community Server, you can find it [here](http://www.mysql.com/products/community/).


# Installation Steps


**NOTE: **The following installation steps and screenshots were taken from a virtual machine   with Windows Server 2008 R2 Service Pack 1, running in Hyper-V on a Windows 8 Host Machine.



	
  1. [Install chocolatey nuget](http://gep13.me/S8ZnDT)

	
  2. Open PowerShell as an Administrator

	
    1. Hit the Start button

	
    2. Type "PowerShell"

	
    3. Right click on the "Windows PowerShell" icon

	
    4. Click "Run as administrator"




	
  3. Type "cinst mysql" and press the "Enter" key

	
  4. The installation of MySQL Community Server will begin

	
  5. The installation will complete


You can see screenshots of each of these steps in the galley at the bottom of this blog post.


# Post Installation Checks


The installation of MySQL Community Server will have added a new Windows Service, you can verify that this is there, and started by doing the following:



	
  1. Hit the Start button

	
  2. Type "services.msc" and press enter

	
  3. In the window that opens up, scroll until to see MySQL

	
  4. Verify that this service is started.




# Installation Screenshots


[gallery ids="1746,1747,1748,1749,1745,1744"]
