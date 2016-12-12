---
author: gep13
comments: true
date: 2013-01-04 14:43:07+00:00
layout: post
slug: how-to-install-mysql-workbench
title: How to install MySQL Workbench
wordpress_id: 1753
categories:
- Chocolatey Series
tags:
- chocolatey
- database
- mysql
- Series
- workbench
---

# What is MySQL Workbench




<blockquote>MySQL Workbench provides DBAs and developers an integrated tools environment for:

- Database Design & Modeling

- SQL Development (replacing MySQL Query Browser)

- Database Administration (replacing MySQL Administrator)</blockquote>


If you want to find out more information about MySQL Workbench, you can find it [here](http://www.mysql.com/downloads/workbench/).


# Installation Steps


**NOTE: **The following installation steps and screenshots were taken from a virtual machine   with Windows Server 2008 R2 Service Pack 1, running in Hyper-V on a Windows 8 Host Machine.



	
  1. [Install chocolatey nuget](http://gep13.me/S8ZnDT)

	
  2. Open PowerShell as an Administrator

	
    1. Hit the Start button

	
    2. Type "PowerShell"

	
    3. Right click on the "Windows PowerShell" icon

	
    4. Click "Run as administrator"




	
  3. Type "cinst vcredist2010" and press the enter key

	
  4. The installation of the Visual C++ 2010 Redistributable will begin

	
  5. The installation will complete

	
  6. Type "cinst mysql.workbench"

	
  7. The installation of MySQL Workbench will begin

	
  8. The installation will complete


You can see screenshots of each of these steps in the galley at the bottom of this blog post.


# Post Installation Checks


There should be a new application installed on your computer, trying opening it to make sure that everything worked correctly.



	
  1. Hit the Start button

	
  2. Type "workbench"

	
  3. Click on the "MySQL Workbench" icon

	
  4. MySQL Workbench should open




# Installation Screenshots


[gallery ids="1746,1765,1766,1767,1759,1760,1761"]
