---
author: gep13
comments: true
date: 2013-03-08 20:09:44+00:00
layout: post
slug: review-of-day-5-of-devweek-2013
title: Review of Day 5 of DevWeek 2013
wordpress_id: 1998
categories:
- Conferences
tags:
- Continuous Delivery
- Day 5
- DevWeek
- Review
---

# Today was the last day of DevWeek


Well, it has been a long, but enjoyable, week at DevWeek, and today was the last day.  Today was another full day workshop, and I decided to attend the Continuous Delivery Workshop with Neal Ford.

People who have been following this series of posts will know that I have been rather lucky, winning both a Surface RT and a Telerik DevCraft Complete License.  There were no prizes won today, but you will all be happy to know that I have purchased a Euro Millions lottery ticket.  I will keep you posted on whether I win anything :-)

Review of the other days of DevWeek can be seen here:



	
  * [Day 1 - Pre-Conference Workshop](http://gep13.me/W0AJEP)

	
  * [Day 2 - Conference Sessions](http://gep13.me/YuOPy2)

	
  * [Day 3 - Conference Sessions](http://gep13.me/ZqTHU1)

	
  * [Day 4 - Conference Sessions](http://gep13.me/13I4BKv)

	
  * [Day 5 - Post-Conference Workshop](http://gep13.me/Y0Gj7A) (this post)




# Post-Conference Workshop at DevWeek


**Presenter: **Neal Ford (you can find his blog [here](http://nealford.com/), and his twitter [here](https://twitter.com/neal4d))

**Topic: **Continuous Delivery Workshop


<blockquote>Getting software released to users is often a painful, risky, and time-consuming process. This workshop sets out the principles and technical practices that enable rapid, incremental delivery of high quality, valuable new functionality to users.
Through automation of the build, deployment, and testing process, and improved collaboration between developers, testers and operations, delivery teams can get changes released in a matter of hours – sometimes even minutes – no matter what the size of a project or the complexity of its code base.
The workshop materials are derived from the best-selling book ‘Continuous Delivery’, and were created in collaboration with the authors and other of my ThoughtWorks colleagues.</blockquote>




# Thoughts


Overall, I have to say that this was a very well structured and executed presentation.  Neal obviously understands this area very well, and was able to field a number of questions from the audience.  There was loads of active conversation from the audience, which made it even more interesting.  Lots of conversation regarding real-life situations, and experiences.

The one thing that I thought was missing from the Workshop was some demos.  There was lots of description of the deployment pipeline, and using puppet to automate the configuration of a server, but I think what really would have cemented these ideas was an example.  Even if this was a simple website application being packaged, and deployed onto even a single server, at the click of a button.  This would have made for a very cool end demonstration to summarize the whole discussion.


# Takeaways


There really was loads to think about in this talk.  Some of the stand out questions, takeaways were as follows:



	
  * How often do you release to users?

	
    * Correct answer of course is that you should be ready to release to users whenever they require it.  Software should always be in a deployable state.




	
  * How long would it take your organisation to deploy a change that involves just one line of code?

	
  * Thinking about the above, can you do this in a repeatable fashion, that doesn't involve crazy amounts of over time?

	
  * Make sure there is a clear delineation between Unit Tests and Functional Tests, and run these as separate parts of your delivery pipeline

	
  * Features Toggles gives you an alternative to creating many Feature Branches, avoiding the problem of merging

	
  * Going Live should be just another deployment that you are already practiced at internally

	
  * You should strive of Continuous Integration of your Databases as well as code

	
  * Look to make use of Puppet and Chef to configure development and staging environments, and store the configuration within your source control

	
  * When implementing Continuous Delivery, first gather metrics of current state of deployment, i.e. lead times and cycle times, and then compare after implementing Continuous Delivery




# Quotes





	
  * "Melt down silly architectural barriers between different areas of the organisation"

	
  * "If it hurts... Do it more often!"

	
  * "Bring the pain forward"

	
  * "Rational ClearCase i the most hostile pice of software towards Agile Development"

	
  * "Git is one of my favourite tools"

	
  * "Avoid life in the knitted Castle"

	
  * "The biggest PITA around software updates is data migration and schema changes"




# Book Recommendations





	
  * [Continuous Integration: Improving Software Quality and Reducing Risk](http://www.amazon.co.uk/Continuous-Integration-Improving-Software-Signature/dp/0321336380/ref=sr_1_1?ie=UTF8&qid=1362768478&sr=8-1) - Paul M. Duvall, Steve Matyas and Andrew Glover

	
  * [Continuous Delivery: Reliable Software Releases Through Build, Test, and Deployment Automation](http://www.amazon.co.uk/gp/product/0321601912/ref=s9_simh_gw_p14_d0_i3?pf_rd_m=A3P5ROKL5A1OLE&pf_rd_s=center-2&pf_rd_r=00E47JENTWKEBCSS5F0X&pf_rd_t=101&pf_rd_p=358549767&pf_rd_i=468294) - Jaz Humble, David Farley

	
  * [Succeeding with Agile: Software Development Using Scrum](http://www.amazon.co.uk/Succeeding-Agile-Development-Addison-Wesley-Signature/dp/0321579364/ref=sr_1_1?ie=UTF8&qid=1362768511&sr=8-1) - Mike Cohn

	
  * [Specification by Example: How Successful Teams Deliver the Right Software](http://www.amazon.co.uk/Specification-Example-Successful-Deliver-Software/dp/1617290084/ref=sr_1_1?ie=UTF8&qid=1362768530&sr=8-1) - Gojko Adzic

	
  * [Growing Object-Oriented Software, Guided by Tests](http://www.amazon.co.uk/Growing-Object-Oriented-Software-Guided-Tests/dp/B006V349VQ/ref=sr_1_1?ie=UTF8&qid=1362768546&sr=8-1) - Steve Freeman and Nat Pryce

	
  * [Refactoring Databases: Evolutionary Database Design](http://www.amazon.co.uk/Refactoring-Databases-Evolutionary-Addison-Wesley-Signature/dp/0321774515/ref=sr_1_1?ie=UTF8&qid=1362768559&sr=8-1) - Scott J. Ambler and Pramod J. Sadalage

	
  * [Release It!: Design and Deploy Production-Ready Software](http://www.amazon.co.uk/Release-It-Production-Ready-Pragmatic-Programmers/dp/0978739213/ref=sr_1_1?ie=UTF8&qid=1362768566&sr=8-1) - Michael T. Nygard




# Overall Thoughts


As I have said in my other posts, I have had a really good time at DevWeek, and I am happy to say that I have learnt a lot this week.  Hoping to be able to take back a lot of what I have learnt and start applying them at work.

Huge congratulations to the organisers of DevWeek, they did a great job, and a huge thanks to all the staff of the Barbican and the helpers at DevWeek!
