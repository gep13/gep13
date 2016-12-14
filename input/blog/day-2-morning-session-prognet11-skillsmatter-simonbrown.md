---
Title: 'Day 2 – Morning Session #prognet11 @skillsmatter @simonbrown'
Published: 6/9/2011
Tags:
- jmeter
- Load Testing
- prognet11
- SkillsMatter
---

The second day of the Progressive .Net Tutorials got off to a flying start thanks to Simon Brown ([@simonbrown](http://twitter.com/#!/simonbrown)) and his “[Load Testing for Developers](http://skillsmatter.com/podcast/open-source-dot-net/load-testing-for-developers)” session.

First up, I have to give Simon a lot of credit for his preparation for this talk. His [blog post](http://www.codingthearchitecture.com/2011/08/25/load_testing_for_developers.html) clearly listed all the requirements for his very interactive session. This included getting the source code for the application that was being tested, the load testing tool ([jmeter](http://jakarta.apache.org/jmeter/)) that we were going to be exercising, as well as his slide deck.

Interestingly, his slide deck was in the form of an [Evernote](http://www.evernote.com/) notebook, which as well as having the standard slides, also had a set of exercises that were to be completed during the course of this presentation. Normally when I am in a session like this, I fire open [OneNote](http://office.microsoft.com/en-gb/onenote/) and take notes in there, but for the sake of this session, I closed OneNote ![Sad smile](http://www.gep13.co.uk/blog/wp-content/uploads/Day-2--Morning-Session-prognet11-skillsm_BEDE/wlEmoticon-sadsmile.png). I have to say though, I was impressed with Evernote. I don’t think I will being switching any time soon, but it was very good.

Now, onto the actual content of the session….

I have to say that I was very impressed with the session. Now, I have never done any form of Load Testing, and I was worried that in order to do any there would be this convoluted process to put all the pieces in the right place and get it all working, but this is simply not the case.

After a couple setup steps, jmeter was in a position to record the steps of a simple login process to the sample web application.

From there, the rest of the session centred around extending the simple log in test script to include:

- more users
- parameterised request
- regular expression extraction of parameters
- running in head less mode
- logging the output of the test to file
 
With all of these things in place it is a small jump to see how you could include these into a Continuous Integration cycle, to get immediate feedback on how your site is reacting to the load testing.

Simon did make a distinction between Load Testing and Integration Testing. Although you “could” use jmeter to do rudimentary Integration Testing, there are other tools on the market that do a better job of this, such as [Selenium](http://seleniumhq.org/) and [Cucumber](http://cukes.info/). The take away from this was use each tool for what it is designed for.

Simon also mentioned that he is away to open source a tool that will help with the parsing of the output from jmeter. I am going to be very interested to see when this is open sourced as I think I am going to make use of jmeter in an upcoming project.

All in all, a great session!
