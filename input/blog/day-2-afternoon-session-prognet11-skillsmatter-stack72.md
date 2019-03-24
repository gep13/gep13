---
Title: 'Day 2 – Afternoon Session #prognet11 @skillsmatter @stack72'
Published: 6/9/2011
Tags:
- cd
- ci
- prognet11
- skillsmatter
---

In the afternoon it was the turn of Paul Stack ([@stack72](http://twitter.com/#!/stack72)) and his “[Continuous Integration to Continuous Delivery](http://skillsmatter.com/podcast/open-source-dot-net/ci-to-cd)”

I was expecting a lot from this session, and I am happy to say that I was not disappointed!

I have seen Paul’s Continuous Integration talk before, and I was very curious to see how you would transition from Continuous Integration to Continuous Delivery/Continuous Deployment.

Paul went on to explain that the core practices of Continuous Delivery break down as follows:

- Continuous Integration
- Configuration Management
  - Dependencies
  - Documentation
  - Environment
  - App Configurations
  - Data
- Tests
  - Unit
  - Integration
  - Functional/Acceptance
  - Performance/Load
  - Penetration

Now, getting all these things in place is no small task, and it is only something that can be achieved over a period of time, it is not going to happen over night. However, once you have it in place, you can build and deploy (as Paul showed) your web application to a web server in a matter of seconds. When you sit and think about this, this is actually very impressive!  When I saw this in action, something suddenly clicked with me. It was the separation of the build and test build configuration and the deploy build configuration. What this meant is that you can have your Continuous Integration build running which prepares the package ready for deployment (which can run every time you check in some code) and another build configuration which is responsible for doing the actual deployment. Clever!  Paul then when on to discuss what turned into a very hot topic, namely Feature Switching. Paul contends that the strategy of using Feature Branching ultimately leads to a number of time consuming merging of the source code (perhaps not as hard when using Distributed Source Control) which could be avoided with the use of toggling features on and off when required. Having thought about it, and listened to the discussion that came from it, it is hard to argue. For more information on the subject, have a look at Martin Fowlers blog post [here](http://martinfowler.com/bliki/FeatureToggle.html).

Again, another great session, and I am very much looking forward to tomorrow.

**Recommended Reading:**

- [Continuous Integration: Improving Software Quality and Reducing Risk](http://www.amazon.co.uk/gp/product/0321336380/ref=as_li_ss_tl?ie=UTF8&tag=www6thprimeco-21&linkCode=as2&camp=1634&creative=19450&creativeASIN=0321336380)![](http://www.assoc-amazon.co.uk/e/ir?t=&l=as2&o=2&a=0321336380)
- [Continuous Integration in .NET](http://www.amazon.co.uk/gp/product/1935182552/ref=as_li_ss_tl?ie=UTF8&tag=www6thprimeco-21&linkCode=as2&camp=1634&creative=19450&creativeASIN=1935182552)![](http://www.assoc-amazon.co.uk/e/ir?t=&l=as2&o=2&a=1935182552)
- [Continuous Delivery: Reliable Software Releases Through Build, Test, and Deployment Automation](http://www.amazon.co.uk/gp/product/0321601912/ref=as_li_ss_tl?ie=UTF8&tag=www6thprimeco-21&linkCode=as2&camp=1634&creative=19450&creativeASIN=0321601912)![](http://www.assoc-amazon.co.uk/e/ir?t=&l=as2&o=2&a=0321601912)

**Recommended Tools/Software:**

- [TeamCity](http://www.jetbrains.com/teamcity/)
- [NetSparker](http://www.mavitunasecurity.com/netsparker/)
- [Git](http://git-scm.com/)
- [Mercurial](http://mercurial.selenic.com/)
- [OpenWrap](http://www.openwrap.org/)
- [NuGet](http://nuget.codeplex.com/)`
- [NUnit](http://www.nunit.org/)
- [NSubstitute](http://nsubstitute.github.com/)
- [StoryQ](http://storyq.codeplex.com/)
- [specflow](http://specflow.org/)
- [Chef](http://www.opscode.com/chef/)
- [puppet](http://puppetlabs.com/)
- [Schema Compare](http://www.red-gate.com/products/oracle-development/schema-compare-for-oracle/?utm_source=google&utm_medium=cpc&utm_content=unmet_need&utm_campaign=oracle&gclid=CMrhhb6siasCFYELfAodHyhl2g)
- [SQL Source Control](http://www.red-gate.com/products/sql-development/sql-source-control/)
- [Hyperic](http://www.hyperic.com/)
- [Zabbix](http://www.zabbix.com/)
- [pingdom](http://www.pingdom.com/)

Wow, that was a long list.
