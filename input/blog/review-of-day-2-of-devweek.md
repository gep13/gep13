---
Title: Review of Day 2 of DevWeek
Published: 30/3/2012
Tags:
- day 2
- developer
- devweek
- events
---

What follows is a brief summary of the sessions that I attended at the 2nd overall day of DevWeek (the first day of actual sessions).  Reviews of the other days of DevWeek can be seen here:

- [Day 1 - Pre-Conference Workshops](http://www.gep13.co.uk/blog/review-of-day-1-of-devweek)
- [Day 2 - Conference Sessions](http://www.gep13.co.uk/blog/review-of-day-2-of-devweek)
- [Day 3 - Conference Sessions](http://www.gep13.co.uk/blog/review-of-day-3-of-devweek)
- Day 4 - Conference Sessions
- [Day 5 - Post-Conference Workshops](http://www.gep13.co.uk/blog/review-of-day-5-of-devweek)

# First Morning Session at DevWeek Day 2

**Presenter:** Mike Taulty (you can find him on twitter [@mtaulty](https://twitter.com/#!/mtaulty) and his [blog](http://mtaulty.com/communityserver/blogs/mike_taultys_blog/default.aspx))

**Topic:** Technical Keynote – Windows 8 for application developers

> Windows 8 is Windows re-imagined for new devices, form-factors and chipsets embracing and unifying touch as a first-class input mechanism and providing a new platform for fast and fluid Metro style applications that put the application and the user front and centre. Developing Metro style applications involves a new set of tooling in Visual Studio and new versions of Expression Blend where you can author your UI in HTML or XAML and write your logic in JavaScript, C# or C++. The new WinRT runtime provides APIs that expose platform capabilities like storage, networking, media and also provides access to the contracts that let Windows loosely link your applications with others on the user’s machine.
> This session will set the scene for the Windows 8 operating system and Windows 8 “Metro Style” applications, and the huge opportunity that they offer you as an application developer.

**Thoughts:** For a lot of reasons, I have not been in a position to play with either Windows 8 or Visual Studio 11.  I have both of the Developer previews downloaded but I haven’t installed them.  As a result, it was great to see both of these items being used in anger, and Mike Taulty provided a very good overview of how the twos things can be used together.

There were a couple of times when the demonstration didn’t go quite the way that I think Mike wanted it to, but if this in any way flustered him, it wasn’t obvious.  The problems that did crop up were nothing major and to be expected with running a Consumer Technical Preview on a prototype device.

Of particular interest was seeing how .NET assemblies could be created and consumed within a Metro Application using HTML5 and JavaScript.  This did involve jumping through a few hoops by first converting the Project Type to use WinMD, and also meant creating a “copy” of the returned object since it couldn’t be used directly.  All in all though, it was a very impressive demonstration of what could be done.

A couple interesting links that came out of the session:

- [Windows Application Certification Kit (WACK)](http://www.microsoft.com/Download/en/details.aspx?id=27414)
- [Windows Dev Center](http://dev.windows.com)
- [WinJS Controls and Styles](http://msdn.microsoft.com/en-us/library/windows/apps/hh465493.aspx)

# Second Morning Session at DevWeek Day 2

**Presenter:** Dino Esposito (you can find him on twitter [@despos](https://twitter.com/#!/despos) and his [site](http://www.expoware.org/))

**Topic: **ASP.NET MVC: Programming for the real world

> You cannot realistically write an ASP.NET MVC controller class without making extensive use of action filters. In ASP.NET MVC, an action filter affects the way in which controller methods execute. An action filter can be used to trap exceptions, authorise access, cache output, and validate requests. This is only the first stage of flexibility, however. In this session, we’ll first see how to create custom filters to perform a variety of custom tasks including compressing the response, adapting to the browser, filling up view dependencies. Up to here, however, filters are only attached to methods statically. The next step consists of defining an infrastructure for you to load filters dynamically thus gaining the ability to toggle certain behaviour on or off on the fly.

**Thoughts: **Having read the description for this session, I was very much looking forward to it.  I have never seen a presentation from Dino before, but it has to be said that he is a very good presenter!  He is obviously very passionate about the topic, and you can’t help but get swept up in his enthusiasm!

The main topic of this presentation was the use of Action Filters, and how these can be used to make your code more readable (the main point that Dino was trying to push throughout the session).

It was very interesting to see how an Action Filter can be used to intercept:

- The start of the request
- The end of the request
- The start of the response
- The end of the response

and how code could be applied at any of these points.  One of the examples that was shown was the inclusion of logging to record how long the request took to execute.  Very interesting.

Dino then went on to show how the necessary Action Filter Attributes out of the code file into the configuration file, and then injected into the code.  The only problem that I had with this is that it potentially made the code “less” readable.  Without looking at the configuration file, in conjunction with the source code, there was no way to see which Action Filters were being applied where.

# First Afternoon Session at DevWeek Day 2

**Presenter:** Robert Boedigheimer (you can find him on twitter [@boedie](https://twitter.com/#!/boedie) and his [blog](http://aspadvice.com/blogs/robertb))

**Topic:** ASP.NET and Visual Studio 11

> Learn about the great new features coming in the next version of ASP.NET and Visual Studio. There are some great enhancements to all of the editors (CSS snippets, CSS vendor prefixes, JavaScript go to definition, etc). Discover the new model binding and repository capabilities in Web Forms, along with unobtrusive jQuery validation support for validators. See how to bundle and minify CSS and JavaScript files simply to drastically improve web site performance. A new script manager also supports debug, release, and CDN versions of files

**Thoughts:** As mentioned above, I haven’t played with Visual Studio 11, so I was very interested to see the changes that were coming in it.  The fact that the session was going to be focused on ASP.NET was a bit of a bonus!

Bottom line, ignoring all the arguments about the colour and icons and whether this is good or bad, the new Visual Studio has some very interesting features!  Some of the stand out items for me included:

- Image Thumbnails in the Solution Explorer – very cool!
- The new Preview Tab which brings up the file with a single click in the Solution Explorer
- Matching tag renaming in the Source Editor
- Attribute Code Intellisense
- New Page Inspector which combines F12 Developer Tools type functionality directly in Visual Studio
- Built in minification of CSS and JavaScript files, including ability to provide a hash code to the resulting bundle to ensure re-download when changes occur on the server
- Support for HTML 5 Types from the TextBox Server Control

Overall, I really enjoyed this session, not least because Robert is a very good speaker, there are a lot of great features going in this next release of Visual Studio and I am very much looking forward to starting to use it.  The fact that you can “round trip” projects between Visual Studio 11 and Visual Studio 2010 (assuming you don’t use any new features in .NET 4.5) will make the transition to this use IDE much easier!

# Second Afternoon Session at DevWeek Day 2

**Presenter:** Dave Wheeler (you can find him on twitter [@coloringinguy](https://twitter.com/#!/coloringinguy) and his [blog](http://coloringinguy.com/))

**Topic:** A .NET developer’s guide to WinRT

> Come to this session to find out how to consume and interact with WinRT from managed code.
> Learn how to write WinRT components; how to integrate them with C++ and JavaScript code; and just how natural and fluid it is to work with WinRT from managed code.

**Thoughts:** Having listened to Mike Taulty’s keynote speech around Metro and WinRT, I was hoping to get some more information regarding the innards of developing with it in this session, and I wasn’t disappointed.  Dave did a great job of cutting through some the marketing regarding Metro and WinRT and basically told it how it is.  This is not to say that he slated Metro or WinRT in any way, that certainly wasn’t the case, but rather, simply told it how it is.

He made is clear that much like it was with Silverlight Development, certain things will not be available when doing Metro Development.  This is due to the new .Net Core Profile.  For instance, although you will be able to use LINQ to Objects, there is no LINQ to SQL, or LINQ to Entities.  This is mainly due to the fact that there is no support for ADO.NET in WinRT.

As with the other talks today, this one was also very good, and it ended a very enjoyable first day of sessions at DevWeek.
