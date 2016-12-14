---
Title: Review of Day 4 of DevWeek 2013
Published: 7/3/2013
Tags:
- ASP.NET MVC
- Day 4
- DevWeek
- MongoDB
- NoSql
- Review
- Security
---

# And the winning continues at DevWeek...

I am very happy to say that today started where yesterday finished off.  I won a Telerik DevCraft Complete license.  Big thanks to Telerik for this! As a number of people on twitter have suggested, I will be purchasing a lottery ticket for this weekend!  Who knows, I might be a winner!

- [Day 1 - Pre-Conference Workshop](http://gep13.me/W0AJEP)
- [Day 2 - Conference Sessions](http://gep13.me/YuOPy2)
- [Day 3 - Conference Sessions](http://gep13.me/ZqTHU1)
- [Day 4 - Conference Sessions](http://gep13.me/13I4BKv) (this post)
- [Day 5 - Post-Conference Workshop](http://gep13.me/Y0Gj7A)

# First Morning Session

**Presenter: **Brock Allen (you can find his blog [here](http://brockallen.com/), and twitter [here](https://twitter.com/brocklallen))

**Topic: **Internals of security in ASP.NET

 > Security is crucial for online applications. This session on security discusses the basics and then the internals of authentication and authorization in ASP.NET. We will discuss Windows and Forums authentication, how roles are assigned to the user and how to control authorization in both WebForms and MVC applications.

**Thoughts**

As per Brock's talk yesterday, this was another very well executed presentation, detailing the fine details of how Security works in ASP.NET (both Windows and Forms Authentication).  This talk got down to the nitty-gritty of how things work, with lots of great insights that showed how depth of knowledge on the subject.  You could argue that some of the topics were "common sense" but that doesn't mean that everyone does them.  It is only when they are laid out in detail as they were in this talk, that you start to think about what you need to do in your own applications.

**Takeaways**

- You can add certificates into Fiddler (which allows you to do "man in the middle" attacks on yourself
- Encryption should not be used to store passwords, you should hash the password
- [Think twice about using MembershipProvider (and SimpleMembership)](http://brockallen.com/2012/09/02/think-twice-about-using-membershipprovider-and-simplemembership/)
- [MembershipReboot](https://github.com/brockallen/BrockAllen.MembershipReboot) - open source alternative to the above
- FormsAuthenticationModule - intercepts all requests, and does the authentication from the cookie that is sent with the request
- If you are doing ajax calls, you can use the HttpContext.Response.SuppressFormsAuthenticationRedirect to prevent the default redirect that would happen (which is of little use in ajax call)
- The Authorize Attribute can be used to secure on both Roles and Users

**Quotes**
	
- "If you are not doing SSL, you are not taking this serious!"
- "We've been gabbing and gabbing about authentication, what about authorization?"

# Rest of the day

The final session of today was one on NoSQL (specifically MongoDB) and I was very interested in seeing this!  On reading the schedule for the other sessions, it was clear that Michael was doing three back to back sessions, that each built on top of each other, to complete a full application.  Essentially, another full day workshop.  As a result, I decided to attend all three of them.

**Presenter: **Michael Kennedy (you can find his blog [here](http://blog.michaelckennedy.net/), and twitter [here](https://twitter.com/mkennedy))

**First Topic: **Nine ways your next ASP.NET MVC project can be better

> So you’re ready to start that new and ambitious ASP.NET MVC project. Maybe you’re kicking off a new startup or just finally moving that old-and-crusty Web Forms project into the modern development world. Either way, this talk will give you some easy things you can do immediately after creating that new MVC project that you will thank yourself for as your project grows in complexity.
> This talk will be based on my related blog post here: [http://bit.ly/QoCxnC](http://bit.ly/QoCxnC)
> We’ll examine each piece of advice using live demos with Visual Studio and some external tools such as YSLOW. We’ll also look at how to “modernize” MVC 3 projects with best practices built into MVC 4 projects (CSS bundles, etc.).

**Second Topic:** Building rich input forms in ASP.NET MVC

 > ASP.NET MVC has gained broad adoption over the last year. This is in part due to its clean and simple design. However, one aspect that newcomers typically get hung up on is building pages that accept user input in various manners. In this talk we will explore the powerful features of ASP.NET MVC that allow us to build rich forms that accept user input. We’ll begin by discussing the built-in HTML Helpers and Model Binding. Next we’ll add validation and show how we can do both client and server-side validation using DataAnnotations. We’ll see that sometimes using domain models as our form-bound objects doesn’t make sense and so we will cover more advanced scenarios using View Models. Finally, time permitting, we’ll see how client-side programming with JavaScript and jQuery can take this even further.

**Third Topic:** Applied NoSQL in .NET

> Perhaps you’ve heard about the next generation of databases roughly classified as NoSQL databases? These databases are generally much better than RDBMS at scaling, performance, and ease-of-development (e.g. in NoSQL the object-relational impedance mismatch usually disappears). Unfortunately, many talks on NoSQL are very academic and general. Not this one.
> This session will introduce the ideas around the so-called NoSQL movement, and we’ll learn how to leverage MongoDB (a popular open source NoSQL db) to build .NET applications using LINQ as the data access language. We’ll build out a .NET application using LINQ and MongoDB in a series of interactive demos using Visual Studio 2012 and C#.

**Thoughts**

Overall, this was a really good series of presentations.  Each one built on the last, and the end result was a complete sample application that shows how to create an ASP.NET MVC Application, using MongoDB as the back-end.  I have been told be Michael that both the sample code for the talks and the slides will be made available, so I will be keeping an eye out for those!

The final session, although the most interesting for me, was (in my opinion) a little rushed in terms of the code that was shown, and there were a couple of problems during the demos that meant there was a bit of jumping around in the code.  However, this was more than made up for in the question and answer session at the end of the talk, lots of great info here, especially the discussion between whether to use MongoDB or RavenDB.

Also, during the second session, there was quite a lot of banging noises coming from elsewhere in the Barbican Centre, which was a little off-putting.

**Takeaways**

- Lots of great tips about how to improve the default ASP.NET MVC project.  Far too many to list here, but check out Michael's blog post linked above.
- Suggestion to use [front-end frameworks](http://usablica.github.com/front-end-frameworks/compare.html) for CSS
- Make use of a [reset.css](http://www.cssreset.com)
- Make use of the Get, Post, Redirect pattern
- For server-side validation, use ModelState.IsValid
- [MarkDownDeep](http://www.toptensoftware.com/markdowndeep/) - very cool
- MongoDB runs as a Windows Service
- There are numerous Management Tools including:
  - MongoVue
  - LinqPad
- Any changes to the "schema" of the objects, will require running a script on the existing database
- In production, you should have at least two instances of MongoDB

# Overall Thoughts

Another busy, but highly enjoyable day at DevWeek.  Was also able to squeeze in a kick lunch meeting with Paul, Hadi, Matt, and Howard.  Was great to catch up with people I haven't seen in a while, as well as put faces to twitter names!
