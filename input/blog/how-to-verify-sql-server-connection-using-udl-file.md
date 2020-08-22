---
Title: How to verify SQL Server connection using udl file
Published: 22/8/2020
Tags:
- sql server
- sql
- udl
- data link properties
- test connection
- connection string
---

This is something that I always forget how to do, until that day when I really need it, so I thought I would create a blog post and a short video to remind myself how to do it.

Basically, when you need to test a connection to a SQL Server instance, create a new text file (doesn't matter what it is called) and change the extension to be "udl".  With that done, double click on the file, and it should open up a Data Link Properties window.  In this window, provide the SQL Server connection details that you are trying to verify:

- server/instance name
- Windows Authentication/SQL Server Authentication details
- Database name
- etc

Once you have provided all the details, simply click the Test Connection button, and things will either work, or they won't.  With this information, you can then populate the configuration file that you are trying to fill in, or perform the installation of the application that needs the information, or whatever it is, knowing that the details you have provided are correct.

This trick has saved me a number of times, and I hope that it helps you as well.

You can follow along with a short video where I show this in action below:

<iframe width="560" height="315" src="https://www.youtube.com/embed/-N0K08q3jrw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

