---
Title: 'Day 1 – Afternoon Session #prognet11 @skillsmatter @dylanbeattie'
Published: 5/9/2011
Tags:
- CSS
- HTML5
- prognet11
- SkillsMatter
---

Wow!

Following up on a very interesting [session this morning](http://www.gep13.co.uk/blog/?p=361), Dylan Beattie ([@dylanbeattie](http://twitter.com/#!/dylanbeattie)) provided a VERY interesting session called “[Front-End Tips for Back-End Devs](http://skillsmatter.com/podcast/open-source-dot-net/front-end-tips-for-back-end-devs)”

The session started out with a whistle stop tour of HTML 5 including a pop quiz about new things that are going out. Example pop quiz question:

> Which of these is NOT an HTML5 element?

> &lt;command&gt; &lt;iframe&gt; &lt;ruby&gt; &lt;shortcut&gt; &lt;progress&gt; &lt;time&gt;

For the answer, take a look at the following:

[http://joshduck.com/periodic-table.html](http://joshduck.com/periodic-table.html)

**NOTE:** At the time of writing this article, the above link contained the Periodic Table, however, it has been pointed out that this link no longer works.  Instead, you can find a similar resource [here](http://www.websitesetup.org/html5-periodical-table) from Robert Mening.

Which lists all the current HTML5 elements in the form of a periodic table.

The talk then took a __VERY__ interesting turn and started to describe how you could apply the SOLID coding principles to your Web Sites’ CSS.

**“S” is for Single Responsibility**

Dylan described the concept of taking traditional CSS and turning it inside out. Rather than containing all the styles, for example font, colour, size etc, within a single, specific, CSS definition, instead create a CSS definition that does one thing, for instance, makes “stuff” red. That way, you can apply multiple selectors to this CSS definition to apply the colour red to an element.

**“O” is for Open-Closed Principle**

Dylan suggested three main rules to follow when applying this principle:

- Don’t use !Important 
- Don’t use classes 
- Don’t use ID’s 

Although, he did concede that in some places, the latter two HAD to be broken.

**“L” is for Liskov Substitution**

Due to the fact that we (as Web Developers) are restricted in the base types that we can inherit from, there is not much that can be done here in applying this particular principle.

**“I” is for Interface Segregation**

The example that was provided was that this:

&lt;input class=”tall wide next button” /&gt;

is a lot easier to read and maintain than:

&lt;input class=”tallWideNextButton” /&gt;

**“D” is for Dependency Inversion**

Although he has tried, Dylan said that there is no direct application of this principle to CSS.

Now, after hearing all of the above, I have to admit that I was a little thrown. It literally goes against everything that I have learnt to date about applying CSS, and it took a while to digest it.

However, after giving it some thought, it does appear to make some sense. I guess it will really only be after I have used this technique in anger that I will be able to make a final decision on whether it makes sense to me.

The session wrapped up with Dylan demonstrating his WebGloss Nuget package. Here he showed how you could create the base styles, master pages, JavaScript etc for a site, package it up into a Nuget package, and then apply this to a blank ASP.Net MVC application. If required, you could then override things that were specific to the new application.

I have to say I really like this approach, and I will be keeping a look out for the final release of WebGloss once Dylan makes it available. HINT: If you could let me know when it is available I would be very grateful ![Smile](http://www.gep13.co.uk/blog/wp-content/uploads/Day-1Afternoon-Session-prognet11-skillsm_FF94/wlEmoticon-smile.png)

In summary, a great session that I would highly recommend you watching back on the Skills Matter site.

**Recommended Reading from this session:**

- [Designing with Web Standards](http://www.amazon.co.uk/gp/product/0321616952/ref=as_li_ss_tl?ie=UTF8&tag=www6thprimeco-21&linkCode=as2&camp=1634&creative=19450&creativeASIN=0321616952)![](http://www.assoc-amazon.co.uk/e/ir?t=&l=as2&o=2&a=0321616952)
- [Transcending CSS: The Fine Art of Web Design](http://www.amazon.co.uk/gp/product/0321410971/ref=as_li_ss_tl?ie=UTF8&tag=www6thprimeco-21&linkCode=as2&camp=1634&creative=19450&creativeASIN=0321410971)![](http://www.assoc-amazon.co.uk/e/ir?t=&l=as2&o=2&a=0321410971)

**Recommended tools/packages:**

- [YSlow](http://developer.yahoo.com/yslow/)
- [Cassette](http://getcassette.net/)
