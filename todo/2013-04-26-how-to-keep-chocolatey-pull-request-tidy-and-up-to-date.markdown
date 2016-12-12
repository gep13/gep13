---
author: gep13
comments: true
date: 2013-04-26 22:24:43+00:00
layout: post
slug: how-to-keep-chocolatey-pull-request-tidy-and-up-to-date
title: How to keep Chocolatey Pull Request tidy, and up to date
wordpress_id: 2059
tags:
- chocolatey
- Git
- GitHub
- Rebase
---

# My adventures in updating my Chocolatey Pull Request


About 3 months ago, I submitted a [pull request](https://github.com/chocolatey/chocolatey/pull/238) to the [Chocolatey Project](https://github.com/chocolatey/chocolatey).  This was a reasonably simple addition, which added a helper method within Chocolatey which allowed the creation of a generic shortcut anywhere that the user required.  As time passed, other commits were made into the Chocolatey Master branch, and my pull-request had become "dated".  In addition, in hindsight, I had created 6 commits, for something that could have really been done as a single commit.

Last week, Chocolatey contributor Rich Siegel ([@rismoney](https://twitter.com/rismoney)), suggested that I should rebase my pull-request against the latest in the master branch, and also to "tidy" up the multiple commits into a single commit.  The reason to do this was really two-fold:



	
  * rebasing against the master branch would mean that merging would be simpler

	
  * making it one commit would mean that the commit history would be cleaner, and if any bugs were introduced as a result of the pull-request(s) it would be easier to find this in the history


My immediate response was, "I would love to do this, but how the hell do I do that?!?".  Thankfully, Rich was able to spell it out in terms that even I was able to understand!  So that I can refer back to this in the future, I decided to capture the details in this blog post.


# Where we were...


This was the situation that I was in:



	
  * I had taken a fork of the Chocolatey code into a new repo

	
  * I had created a branch called Issue-235 which is where my commits had been added

	
  * By branch was behind chocolatey/master by a few commits




# Where we wanted to get to...


Where we were trying to get to was:



	
  * My branch brought up to the latest code that was in master

	
  * Rewrite commit history by reducing all commits (I had 6) into just one

	
  * Update single commit comment to include all details

	
  * Update pull request




# What was required


The following gist contains all the commands that were executed:



The final part of what was desired, i.e. updating the pull-request with the changes, haven't _automagically_.  Thinking about it, this makes sense.  Your pull request is "linked" to the commits in your forked branch.  When this changes, the pull request is also updated.

I have to say a big thanks to Rich for all his help on this.  I learnt a lot by doing this!


# Should Contributors keep their pull requests up to date?


Within the discussion of this pull-request, Chocolatey creator Rob Reynolds ([@ferventcoder](https://twitter.com/ferventcoder)) suggested that it wasn't the responsibility of the creator of the pull request to keep it "up-to-date", but rather for the project coordinators to either accept or reject the pull request quickly enough that keeping it up-to-date would not be required.  Personally, I think that this would be the "ideal", but that we don't live in an ideal world.  Time constraints always mean that things don't happen as quickly as we would like, and as a result, we, as the community, should do what we can to help out.
