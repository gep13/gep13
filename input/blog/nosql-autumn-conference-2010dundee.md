---
Title: NoSql Autumn Conference 2010–Dundee
Published: 21/11/2010
Tags:
- ddd
- meetings
- nosql
---

Yesterday I attended the NoSql Autumn Conference at Dundee University:

[http://developerdeveloperdeveloper.com/nosql1/](http://developerdeveloperdeveloper.com/nosql1/)

This included talks on [Cassandra](http://cassandra.apache.org/) (by Andy Cobley), [Hadoop](http://hadoop.apache.org/) (by Jonathan Forbes),[RavenDB](http://ravendb.net/) (by Rob Ashton) and [VoltDB](http://voltdb.com/) (by Mark Whitehorn), as well as an opening session entitled “Is NoSql the future of data storage?” by Gary Short.

In the past I have always used Sql Server, MySql and Oracle, I have never done anything with any NoSql Systems, but I went along to this conference with an open mind to see what else was available.

Of the systems that were talked about, the most interesting, from my point of view, was RavenDB. This is built on C#, and uses LINQ expressions to save and retrieve information from the data store, so from a .Net Development perspective, it certainly looked like the easiest system to get up and running with. The others required the use of Java, or Erlang, neither of which I have ever played with.

The only “slight” issue with RavenDB is that a lot of the features that make it stand out are currently still in the unstable branch of the development. However, as the speaker, Rob, pointed out, by the time you are ready to roll out a system that uses these features, it is more than likely that these features will have been moved over to the stable branch as there is a high level of active development going on.

From a NoSql point of view, the concepts of Consistency, Availability, and Partition Tolerance, (CAP) are at the heart of each system, but no one system can have each of these. They can have 2 out of the 3 only. So for instance, standard systems like SQL Server are CA, Hadoop is CP and RavenDB is AP.

Gary Short pretty much summed up the NoSql movement when he answered the question “Is NoSql the future of data storage?” by saying Yes, and No.

The concepts at the heart of NoSql make it very appealing when it comes to distributed storage and horizontal scalability, but it won’t be long before the big database manufacturers start to implement some of these concepts natively into their systems.
