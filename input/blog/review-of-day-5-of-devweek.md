---
Title: Review of Day 5 of DevWeek
Published: 30/3/2012
Tags:
- Day 5
- Developer
- DevWeek
- Events
---

What follows is a brief summary of the final day of [DevWeek 2012](http://www.devweek.com/).  It has been a very long, but also a very enjoyable, week and I have to give a lot of credit of all of the organisers, speakers and sponsors for putting on a great conference.  Congratulations to Nick Payne of [Bearkpark Publishing](http://www.bearpark.co.uk/) for organising everything!  Reviews of the other days of DevWeek can be seen here:

- [Day 1 - Pre-Conference Workshops](http://www.gep13.co.uk/blog/review-of-day-1-of-devweek/)
- [Day 2 - Conference Sessions](http://www.gep13.co.uk/blog/review-of-day-2-of-devweek/)
- [Day 3 - Conference Sessions](http://www.gep13.co.uk/blog/review-of-day-3-of-devweek/)
- Day 4 - Conference Sessions
- [Day 5 - Post-Conference Workshops](http://www.gep13.co.uk/blog/review-of-day-5-of-devweek/)

# Post-Conference Workshop at DevWeek

**Presenter:** Kevin Jones (you can find him on twitter [@kevinrjones](https://twitter.com/#!/kevinrjones) and his [site](http://www.rocksolidknowledge.com/))

**Topic:** A day of unit testing

> Unit testing has become more prevalent over the last few years as more and more teams have come to realise the importance of ensuring code has some degree of test coverage. Developers are aware that code quality is an important issue and that to get high quality code they often need to refactor. Refactoring safely requires unit tests. We will spend the day looking at unit testing, how to write a unit test, how to test external resources such as databases and web services, how to work with legacy code and how to ensure that your code is designed to be tested.

**Thoughts:** I actually got a lot from this session.  Not only is Kevin a great speaker, but he was able to provide lots of real life experiences with regard to how he has used Unit Testing in the various jobs that he has had.  I have done a lot of reading on the subject of Unit Testing but for one reason or another have not been able to fully implement at my place of work the way that I would like to.  What I particularly liked about this session was the pragmatic approach that Kevin used to implementing Unit Testing.

In this day long session, Kevin talked through lots of topics that you would expect in a session like this:

- Unit Testing
- Integration Testing
- Mocking
- Dependency Injection
- Inversion of Control

However, what was really impressive about this session was the final demonstration which brought everything together into one concrete demonstration application.  This included:

- Starting with a blank ASP.NET MVC Application which would use Unity
- Adding a new Integration Test Project and added Specflow, Selenium and NUnit
- Adding a new Unit Test Project and added NUnit
- Created a Specflow Feature and Scenario and saw it fail
- Created some Unit Tests and saw them fail
- Implemented the necessary code, i.e. Controller and View to make the tests pass
- Refactored the code to include repository pattern for Database access using Entity Framework and Unity for injecting a repository instance whilst ensuring Tests continued to pass, as well as mocking the repository for testing purposes

All in all, this single demonstration brought everything together for me, and it really hammered home all the topics of the day.  Very well done!!

In addition, Kevin is also working on a blog application which demonstrates the use of all of these frameworks and strategies.  You can find this on his GiHub account [here](https://github.com/kevinrjones/mblog).  Bear in mind, this application has been created in Visual Studio 11 using .NET Framework 4.5 and the Beta edition of Entity Framework 5, so if you want to play with it, you will need to have all of these installed somewhere.

Thanks for a great session Kevin!!
