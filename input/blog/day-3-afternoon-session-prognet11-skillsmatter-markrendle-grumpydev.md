---
Title: 'Day 3 – Afternoon Session #prognet11 @skillsmatter @markrendle @grumpydev'
Published: 7/9/2011
Tags:
- Nancy
- prognet11
- Simple.Data
- SkillsMatter
---

I had a lot of trouble deciding on the final session of the final day at the Progressive .Net Tutorials. The choice was between Nathan Gloyn ([@nathangloyn](http://twitter.com/#!/nathangloyn)) and his “[You think you know agile?](http://skillsmatter.com/podcast/ajax-ria/you-think-you-know-agile)” and the “[Introduction to Nancy and Simple.Data](http://skillsmatter.com/podcast/ajax-ria/introduction-to-nancy-and-simple-data)” talk featuring Mark Rendle ([@markrendle](http://twitter.com/#!/markrendle)) and Steven Robbins ([@grumpydev](http://twitter.com/#!/grumpydev)).

Why the debate? Well, let me tell you…

We have recently tried and failed to implement an Agile approach in a project, so I am fairly sure that we will not be using an Agile approach for the foreseeable future. Coupled with the fact that I have seen an earlier Kanban talk from Nathan, initially I was leaning towards Mark and Steven’s session. In addition, in a recent blog [post](http://www.gep13.co.uk/blog/becoming-a-better-developer) I talked about how is was striving to becoming a better developer and in order to do this I feel I need to learn more languages and frameworks, and the Nancy and Simple.Data talk seemed to fit that bill perfectly.

In the end, I opted to attend the Nancy and Simple.Data talk (sorry Nathan!) 

This session was split straight down the middle. The first half was devoted to an introduction to both Nancy and Simple.Data, and the second half was handed over to the delegates to create a sample “To Do” application. This format worked really well. It gave me the opportunity to directly apply what we had been told about, with the benefit of having Mark and Steven in the room, if there were any questions.

What struck me immediately about both packages is how quickly you can get up and running with both of them. There are NuGet packages available for both and each one are split into a number of smaller packages so that you can only take what you need.

For instance:

- install-package Nancy.Hosting.Self 
- install-package Nancy.Hosting.AspNet 
- install-package Nancy.Hosting.Wcf 
- install-package Nancy.Hosting.Owin 
- install-package Nancy.Viewengines.Razor 
- install-package Nancy.Authentication.Forms 

And:

- install-package Simple.Data.SqlServer 
- install-package Simple.Data.SqlCompact40 
- install-package Simple.Data.Core 
- install-package Simple.Data.Mysql 

This is a prime example of the packaging that was described in the [first session on Monday](http://www.gep13.co.uk/blog/day-1-morning-session-prognet11-skillsmatter-icooper-serialseb).

Once the core packages were installed:

- install-package Nancy.Hosting.AspNet 
- install-package Simple.Data.SqlServer 

Getting a basic website up and running is as simple as:

```csharp
public class Hello : NancyModule
{
    public Hello()
    {
        Get["/"] = _ => "Hello World!";
    }
}
```

And:

```csharp
static void Main(string[] args)
{
    var db = Database.OpenNamedConnection("prognet");
    var hello = db.Hello.FindById(1);
    Console.WriteLine("{0} {1}!", hello.Greeting, hello.Subject);
}
```

Simples!

With this fully discussed, Mark then showed a more fully functional sample in the form of his “Heckle” application which you can find linked below. 

Speaking to Mark after the session the one problem that I had was, I couldn’t see past how you actually use Nancy and Simple.Data in a “proper” application. By that I mean an application that fully separates the layers/tiers, UI, BLL and DAL, etc. Mark pointed me at [NerdBeers](https://github.com/ToJans/NerdBeers) which I am going to have to take a look at, as I think it will go along way to cement my understanding.

All in all, a great session that seemed to be enjoyed by all!

**Quotes:**

“Python people are boring” – Mark Rendle

**Reference Information:**

[http://simplefx.org/simpledata/docs/](http://simplefx.org/simpledata/docs/)

**Code used during the talk:**

- [https://github.com/markrendle/simple.data](https://github.com/markrendle/simple.data)
- [https://github.com/nancyfx](https://github.com/nancyfx)
- [https://github.com/markrendle/Heckle](https://github.com/markrendle/Heckle)
- [https://github.com/markrendle/todo-sample](https://github.com/markrendle/todo-sample)
