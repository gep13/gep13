---
author: gep13
comments: true
date: 2012-05-30 06:59:18+00:00
layout: post
slug: subtle-problem-with-stylecop-surrounding-this.-prefix
title: Subtle problem with StyleCop surrounding this. prefix
wordpress_id: 1126
categories:
- StyleCop
tags:
- SA1101
- SA1126
- StyleCop
- StyleCop for ReSharper
- this.
---

While preparing for my [StyleCop presentation at DDDSW](http://www.gep13.co.uk/blog/dddsw-4-stylecop-breaking-down-the-barriers-to-entry/) I created a number of scripts for the demos that I wanted to show during the presentation.  For the first demo, which was a simple introduction to what StyleCop is and how it can be used, the script went like this:



	
  * Create new Windows Forms Application using C#

	
  * Show that the Project Builds successfully

	
  * Run StyleCop at the solution level and show that there are **30 Warnings** out of the box (yes, this may seem like a lot of warnings for a brand new project, with no custom code, but this was covered in later demos.  If you want more information about how this can be corrected easily, feel free to give me a shout).

	
  * Run StyleCop on Form1.cs and show that there are **12 Warnings** out of the box

	
  * Open StyleCop Settings and enter Copyright Information, as well as disable analysis of designer files

	
  * SA1633: Insert a copyright header to the top of Form1.cs using code snippet

	
  * Run StyleCop on Form1.cs and show that there are **11 Warnings** left

	
  * SA1600: Insert a Summary Tag (with correct text) for the Form1 constructor

	
  * Run StyleCop on Form1.cs and show that there are **10 Warnings** left

	
  * SA1200: Move all using statements within namespace

	
  * Run StyleCop on Form1.cs and show that there are **2 Warnings** left

	
  * SA1601: To show the use of a SuppressMessage, suppress this warning

	
  * Run StyleCop on Form1.cs and show that there are **1 Warnings** left

	
  * SA1101: Put a this. in front of the call to InitializeComponent

	
  * Run StyleCop on Form1.cs and show that there are **0 Warnings** left

	
  * Rejoice in the fact that StyleCop now runs with no warnings


This was the plan, however, it turns out that this wasn’t going to be as easy as I thought!

When I first started creating my StyleCop Demos, and the scripts to go with it, I was using StyleCop 4.7.23 which at the time was the latest version, but unfortunately there was a bug in StyleCop surrounding SA1101.  Information on this can be found [here](http://stylecop.codeplex.com/workitem/7266).  What made things a little more interesting is that even though StyleCop wasn’t picking up the violation, the StyleCop for ReSharper plugin that I use was picking it up:

[![Problem_with_this._and_resharper](http://www.gep13.co.uk/blog/wp-content/uploads/2012/05/Problem_with_this._and_resharper_thumb.png)](http://www.gep13.co.uk/blog/wp-content/uploads/2012/05/Problem_with_this._and_resharper.png)

This didn’t make for a good demo, so I set about changing the script for the demo such that this bug wouldn’t be mentioned.  The morning of Saturday 26th May 2012 comes around and I am sitting in the speaker room adding the finishing touches to my slides and demos, only to find out that there is a new version of StyleCop been released, version 4.7.26.  Doing a little bit of digging, it appeared that this release fixed the issue that I was seeing, so with 1 hour before my presentation was due to start, I decided to install the latest version of StyleCop.

Now, I know that there are probably a lot of seasoned presenters out there that are shouting:


<blockquote>WHAT THE HELL WERE YOU THINKING!!</blockquote>


But, I am happy to say that the uninstall and reinstall of StyleCop went off without any problems, and on running through the script that I mentioned above, both StyleCop and StyleCop for ReSharper, correctly identify the violation:

[![corrected_problem_with_this._and_resharper](http://www.gep13.co.uk/blog/wp-content/uploads/2012/05/corrected_problem_with_this._and_resharper_thumb.png)](http://www.gep13.co.uk/blog/wp-content/uploads/2012/05/corrected_problem_with_this._and_resharper.png)

_NOTE: The above screenshot is actually taken using StyleCop 4.7.27 (which was released on Tuesday 29th May 2012) and actually includes a new rule SA1126.  This appears to supersede the original violation which was SA1101._

So, long story short, if you are seeing oddities when running StyleCop, and StyleCop for ReSharper plugin, make sure that you have the most recent version of StyleCop installed.  In order to find out about new releases you can subscribe to the Release Notifications email on the CodePlex site [here](http://stylecop.codeplex.com/releases/view/79972).  You will need to log into CodePlex before you can enable this.
